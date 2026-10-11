(() => {
  "use strict";

  const QUESTION_TYPES = {
    blank: "客观填空",
    cloze_subjective: "主观挖空",
    free_response: "自由默写"
  };
  const REVIEW_STATUSES = new Set(["incorrect", "fuzzy", "not_know"]);
  const STORAGE_KEY = "bse-study-progress-v1";

  class QuestionRepository {
    constructor(bank) {
      if (!bank || !Array.isArray(bank.questions)) throw new Error("题库数据未加载或格式不正确。");
      this.version = bank.version || "未标记";
      this.questions = bank.questions.map((question) => this.validate(question));
    }

    validate(question) {
      const required = ["id", "section", "type", "prompt", "answer", "explanation", "tags", "difficulty"];
      const missing = required.filter((key) => question[key] === undefined || question[key] === "");
      if (missing.length || !QUESTION_TYPES[question.type] || !Array.isArray(question.tags)) {
        throw new Error(`题库中存在格式不正确的题目：${question.id || "未命名"}`);
      }
      if (question.type === "cloze_subjective") {
        if (!Array.isArray(question.answer) || question.answer.length === 0) throw new Error(`挖空题答案格式错误：${question.id}`);
        const blanks = (question.prompt.match(/\{\{\d+\}\}/g) || []).length;
        if (blanks !== question.answer.length) throw new Error(`挖空数量与答案数量不一致：${question.id}`);
      } else if (typeof question.answer !== "string") {
        throw new Error(`题目答案应为文本：${question.id}`);
      }
      return question;
    }

    sections() {
      return [...new Set(this.questions.map((question) => question.section))];
    }

    countBySection(section) {
      return section === "all" ? this.questions.length : this.questions.filter((question) => question.section === section).length;
    }

    chapters(section) {
      return [...new Set(this.questions
        .filter((question) => question.section === section)
        .map((question) => question.tags[0])
        .filter(Boolean))];
    }

    filter({ section, chapter, type, reviewOnly, progress }) {
      return this.questions.filter((question) => {
        const inSection = section === "all" || question.section === section;
        const inChapter = chapter === "all" || question.section !== "中级会计实务" || question.tags[0] === chapter;
        const inType = type === "all" || question.type === type;
        const record = progress.get(question.id);
        const needsReview = record && REVIEW_STATUSES.has(record.lastStatus);
        return inSection && inChapter && inType && (!reviewOnly || needsReview);
      });
    }
  }

  class ProgressStore {
    constructor(storageKey) {
      this.storageKey = storageKey;
      this.records = this.load();
    }

    load() {
      try {
        const parsed = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch {
        return {};
      }
    }

    save() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.records));
    }

    get(questionId) {
      return this.records[questionId] || null;
    }

    record(questionId, status) {
      const previous = this.get(questionId) || { attempts: 0 };
      this.records[questionId] = {
        attempts: previous.attempts + 1,
        lastStatus: status,
        updatedAt: new Date().toISOString()
      };
      this.save();
      return this.records[questionId];
    }

    clear() {
      this.records = {};
      localStorage.removeItem(this.storageKey);
    }

    stats(questions) {
      const answered = questions.filter((question) => this.get(question.id));
      const mastered = answered.filter((question) => ["correct", "mastered"].includes(this.get(question.id).lastStatus));
      const review = answered.filter((question) => REVIEW_STATUSES.has(this.get(question.id).lastStatus));
      return { answered: answered.length, mastered: mastered.length, review: review.length, total: questions.length };
    }
  }

  const repo = new QuestionRepository(globalThis.QUESTION_BANK);
  const progress = new ProgressStore(STORAGE_KEY);
  const state = { view: "practice", section: "all", chapter: "all", type: "all", reviewOnly: false, index: 0, summarySection: "all", visible: [] };
  const elements = {
    bankVersion: document.querySelector("#bank-version"),
    masteredPercent: document.querySelector("#mastered-percent"),
    progressSummary: document.querySelector("#progress-summary"),
    masteredCount: document.querySelector("#mastered-count"),
    reviewCount: document.querySelector("#review-count"),
    attemptCount: document.querySelector("#attempt-count"),
    progressRing: document.querySelector(".progress-ring"),
    sectionFilters: document.querySelector("#section-filters"),
    currentSectionLabel: document.querySelector("#current-section-label"),
    questionCounter: document.querySelector("#question-counter"),
    chapterFilter: document.querySelector("#chapter-filter"),
    typeFilter: document.querySelector("#type-filter"),
    reviewToggle: document.querySelector("#review-toggle"),
    questionCard: document.querySelector("#question-card"),
    emptyState: document.querySelector("#empty-state"),
    typeBadge: document.querySelector("#type-badge"),
    difficultyLabel: document.querySelector("#difficulty-label"),
    tagsLabel: document.querySelector("#tags-label"),
    questionTitle: document.querySelector("#question-title"),
    questionPrompt: document.querySelector("#question-prompt"),
    answerForm: document.querySelector("#answer-form"),
    answerArea: document.querySelector("#answer-area"),
    submitAnswer: document.querySelector("#submit-answer"),
    revealAnswer: document.querySelector("#reveal-answer"),
    feedback: document.querySelector("#feedback"),
    previousQuestion: document.querySelector("#previous-question"),
    nextQuestion: document.querySelector("#next-question"),
    questionDots: document.querySelector("#question-dots"),
    clearProgress: document.querySelector("#clear-progress"),
    viewButtons: [...document.querySelectorAll("[data-view]")],
    practiceView: document.querySelector("#practice-view"),
    summaryView: document.querySelector("#summary-view"),
    summaryTitle: document.querySelector("#summary-title"),
    summaryStats: document.querySelector("#summary-stats"),
    summaryFilters: document.querySelector("#summary-filters"),
    knowledgeGroups: document.querySelector("#knowledge-groups"),
    skipLink: document.querySelector(".skip-link")
  };


  function summaryPrompt(question) {
    return question.prompt.replace(/\{\{\d+\}\}/g, "____");
  }

  function summaryAnswer(question) {
    return Array.isArray(question.answer) ? question.answer.join("；") : question.answer;
  }

  function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  }

  function renderSummaryFilters() {
    const choices = [{ id: "all", label: "全部知识点" }, ...repo.sections().map((section) => ({ id: section, label: section }))];
    elements.summaryFilters.replaceChildren(...choices.map((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `summary-filter${state.summarySection === choice.id ? " is-active" : ""}`;
      button.setAttribute("aria-pressed", String(state.summarySection === choice.id));
      button.textContent = choice.id === "all" ? `${choice.label} · ${repo.questions.length}` : `${choice.label} · ${repo.countBySection(choice.id)}`;
      button.addEventListener("click", () => {
        state.summarySection = choice.id;
        renderKnowledge();
      });
      return button;
    }));
  }

  function renderKnowledge() {
    const visibleQuestions = state.summarySection === "all"
      ? repo.questions
      : repo.questions.filter((question) => question.section === state.summarySection);
    const groups = new Map();
    visibleQuestions.forEach((question) => {
      if (!groups.has(question.section)) groups.set(question.section, []);
      groups.get(question.section).push(question);
    });
    elements.summaryStats.textContent = `共 ${visibleQuestions.length} 条知识点 · ${groups.size} 个专题`;
    elements.knowledgeGroups.replaceChildren(...[...groups.entries()].map(([section, questions]) => {
      const group = document.createElement("section");
      group.className = "knowledge-section";
      const heading = document.createElement("div");
      heading.className = "knowledge-section-heading";
      heading.append(
        createTextElement("h2", "", section),
        createTextElement("span", "knowledge-count", `${questions.length} 条`)
      );
      const grid = document.createElement("div");
      grid.className = "knowledge-grid";
      questions.forEach((question) => {
        const card = document.createElement("article");
        card.className = "knowledge-card";
        const tagLine = createTextElement("p", "knowledge-tags", question.tags.map((tag) => `#${tag}`).join(" "));
        const prompt = createTextElement("h3", "", summaryPrompt(question));
        const answer = document.createElement("div");
        answer.className = "knowledge-answer";
        answer.append(
          createTextElement("span", "", "标准表述"),
          createTextElement("p", "", summaryAnswer(question))
        );
        const explanation = createTextElement("p", "knowledge-explanation", question.explanation);
        card.append(tagLine, prompt, answer, explanation);
        grid.append(card);
      });
      group.append(heading, grid);
      return group;
    }));
    renderSummaryFilters();
  }

  function switchView(view, shouldFocus = true) {
    const isSummary = view === "summary";
    state.view = isSummary ? "summary" : "practice";
    elements.practiceView.hidden = isSummary;
    elements.summaryView.hidden = !isSummary;
    elements.skipLink.href = isSummary ? "#summary-view" : "#practice";
    elements.viewButtons.forEach((button) => {
      const active = button.dataset.view === state.view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (isSummary) {
      renderKnowledge();
      if (shouldFocus) {
        elements.summaryView.focus({ preventScroll: true });
        elements.summaryView.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (shouldFocus) {
      elements.practiceView.focus({ preventScroll: true });
      elements.practiceView.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function strictMatch(userAnswer, answer) {
    return userAnswer.trim() === answer.trim();
  }

  function currentQuestion() {
    return state.visible[state.index];
  }

  function labelForStatus(record) {
    if (!record) return null;
    if (["correct", "mastered"].includes(record.lastStatus)) return { text: "已掌握", className: "status-mastered" };
    return { text: "待复习", className: "status-review" };
  }

  function renderStats() {
    const stats = progress.stats(repo.questions);
    const percentage = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
    elements.masteredPercent.textContent = `${percentage}%`;
    elements.progressRing.style.setProperty("--progress", percentage);
    elements.masteredCount.textContent = stats.mastered;
    elements.reviewCount.textContent = stats.review;
    elements.attemptCount.textContent = stats.answered;
    elements.progressSummary.textContent = stats.answered ? `已完成 ${stats.answered} / ${stats.total} 题` : "尚未开始练习";
  }

  function renderSections() {
    const choices = [{ id: "all", label: "全部专题" }, ...repo.sections().map((section) => ({ id: section, label: section }))];
    elements.sectionFilters.replaceChildren(...choices.map((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `chapter-filter${state.section === choice.id ? " is-active" : ""}`;
      button.setAttribute("aria-pressed", String(state.section === choice.id));
      button.innerHTML = `<span></span><span class="filter-count"></span>`;
      button.firstChild.textContent = choice.label;
      button.lastChild.textContent = repo.countBySection(choice.id);
      button.addEventListener("click", () => {
        state.section = choice.id;
        state.chapter = "all";
        state.index = 0;
        refresh();
      });
      return button;
    }));
  }

  function renderChapterFilter() {
    const isIntermediate = state.section === "中级会计实务";
    elements.chapterFilter.hidden = !isIntermediate;
    elements.chapterFilter.disabled = !isIntermediate;
    if (!isIntermediate) {
      elements.chapterFilter.replaceChildren();
      return;
    }
    const choices = [{ id: "all", label: "全部章节" }, ...repo.chapters(state.section).map((chapter) => ({ id: chapter, label: chapter }))];
    elements.chapterFilter.replaceChildren(...choices.map((choice) => {
      const option = document.createElement("option");
      option.value = choice.id;
      const count = choice.id === "all" ? repo.countBySection(state.section) : repo.questions.filter((question) => question.section === state.section && question.tags[0] === choice.id).length;
      option.textContent = choice.label + " · " + count;
      option.selected = state.chapter === choice.id;
      return option;
    }));
    elements.chapterFilter.value = state.chapter;
  }

  function setFeedback(content, tone = "") {
    elements.feedback.hidden = false;
    elements.feedback.className = `feedback ${tone}`.trim();
    elements.feedback.replaceChildren(content);
  }

  function feedbackContent(title, reference, explanation) {
    const fragment = document.createDocumentFragment();
    const heading = document.createElement("h3");
    heading.textContent = title;
    const referenceParagraph = document.createElement("p");
    referenceParagraph.className = "reference-answer";
    referenceParagraph.innerHTML = "<strong>参考答案：</strong>";
    referenceParagraph.append(document.createTextNode(reference));
    const explanationParagraph = document.createElement("p");
    explanationParagraph.innerHTML = "<strong>提示：</strong>";
    explanationParagraph.append(document.createTextNode(explanation));
    fragment.append(heading, referenceParagraph, explanationParagraph);
    return fragment;
  }

  function addSelfRating(container, question) {
    const row = document.createElement("div");
    row.className = "rating-row";
    const label = document.createElement("span");
    label.textContent = "这题掌握得如何？";
    row.append(label);
    [["mastered", "掌握"], ["fuzzy", "模糊"], ["not_know", "不会"]].forEach(([rating, labelText]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rating-button";
      button.dataset.rating = rating;
      button.textContent = labelText;
      button.addEventListener("click", () => {
        progress.record(question.id, rating);
        [...row.querySelectorAll("button")].forEach((item) => item.classList.toggle("is-selected", item === button));
        renderStats();
        renderDots();
        renderQuestionMeta(question);
      });
      row.append(button);
    });
    container.append(row);
  }

  function renderBlank(question) {
    const input = document.createElement("input");
    input.className = "answer-input";
    input.name = "answer";
    input.autocomplete = "off";
    input.placeholder = "请输入答案";
    input.setAttribute("aria-label", "填写答案");
    const helper = document.createElement("p");
    helper.className = "input-helper";
    helper.textContent = "提交后将按标准答案严格核对（仅忽略首尾空格）。";
    elements.answerArea.append(input, helper);
  }

  function renderCloze(question) {
    const container = document.createElement("div");
    container.className = "cloze-text";
    const pieces = question.prompt.split(/(\{\{\d+\}\})/g);
    pieces.forEach((piece) => {
      const match = piece.match(/^\{\{(\d+)\}\}$/);
      if (!match) {
        container.append(document.createTextNode(piece));
        return;
      }
      const index = Number(match[1]);
      const input = document.createElement("input");
      input.type = "text";
      input.className = "answer-input inline-answer";
      input.name = `blank-${index}`;
      input.autocomplete = "off";
      input.setAttribute("aria-label", `第 ${index + 1} 空`);
      container.append(input);
    });
    const helper = document.createElement("p");
    helper.className = "input-helper";
    helper.textContent = "每一空均按标准答案严格核对（仅忽略首尾空格）。";
    elements.answerArea.append(container, helper);
  }

  function renderFreeResponse() {
    const textarea = document.createElement("textarea");
    textarea.className = "free-response";
    textarea.name = "answer";
    textarea.placeholder = "请在这里默写，再展开参考答案自评。";
    textarea.setAttribute("aria-label", "默写答案");
    const helper = document.createElement("p");
    helper.className = "input-helper";
    helper.textContent = "自由默写不自动判分，请在查看参考答案后完成自评。";
    elements.answerArea.append(textarea, helper);
  }

  function renderQuestionMeta(question) {
    elements.typeBadge.textContent = QUESTION_TYPES[question.type];
    elements.difficultyLabel.textContent = `难度 ${"●".repeat(question.difficulty)}${"○".repeat(3 - question.difficulty)}`;
    elements.tagsLabel.textContent = question.tags.map((tag) => `#${tag}`).join(" ");
    const oldStatus = elements.questionCard.querySelector(".status-label");
    if (oldStatus) oldStatus.remove();
    const status = labelForStatus(progress.get(question.id));
    if (status) {
      const label = document.createElement("span");
      label.className = `status-label ${status.className}`;
      label.textContent = status.text;
      elements.questionCard.querySelector(".question-meta").append(label);
    }
  }

  function renderQuestion() {
    const question = currentQuestion();
    elements.feedback.hidden = true;
    elements.feedback.replaceChildren();
    elements.answerArea.replaceChildren();
    if (!question) return;
    renderQuestionMeta(question);
    elements.questionTitle.textContent = question.type === "free_response" ? "写下你记得的全部要点" : "请补全下面的知识点";
    elements.questionPrompt.textContent = question.type === "cloze_subjective" ? "在空格中补全关键表述。" : question.prompt;
    elements.submitAnswer.textContent = question.type === "free_response" ? "完成默写并自评" : "核对答案";
    if (question.type === "blank") renderBlank(question);
    if (question.type === "cloze_subjective") renderCloze(question);
    if (question.type === "free_response") renderFreeResponse(question);
    renderDots();
  }

  function renderDots() {
    elements.questionDots.replaceChildren(...state.visible.map((question, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "question-dot";
      const record = progress.get(question.id);
      if (index === state.index) dot.classList.add("is-current");
      if (record && ["correct", "mastered"].includes(record.lastStatus)) dot.classList.add("is-mastered");
      if (record && REVIEW_STATUSES.has(record.lastStatus)) dot.classList.add("is-review");
      dot.setAttribute("aria-label", `第 ${index + 1} 题${record ? `，${labelForStatus(record).text}` : ""}`);
      dot.addEventListener("click", () => { state.index = index; renderQuestion(); });
      return dot;
    }));
    elements.previousQuestion.disabled = state.index === 0;
    elements.nextQuestion.disabled = state.index >= state.visible.length - 1;
  }

  function reveal(question) {
    const content = feedbackContent("参考答案", Array.isArray(question.answer) ? question.answer.join("；") : question.answer, question.explanation);
    if (question.type === "free_response") addSelfRating(content, question);
    setFeedback(content);
  }

  function gradeCurrentQuestion(event) {
    event.preventDefault();
    const question = currentQuestion();
    if (!question) return;
    if (question.type === "free_response") {
      reveal(question);
      return;
    }
    let correct = false;
    if (question.type === "blank") {
      const value = elements.answerArea.querySelector("input").value;
      if (!value.trim()) return setFeedback(feedbackContent("请先填写答案", "", "输入答案后再核对。"), "is-incorrect");
      correct = strictMatch(value, question.answer);
    } else {
      const inputs = [...elements.answerArea.querySelectorAll("input")];
      if (inputs.some((input) => !input.value.trim())) return setFeedback(feedbackContent("请补全所有空格", "", "填完全部空格后再核对。"), "is-incorrect");
      correct = inputs.every((input, index) => strictMatch(input.value, question.answer[index]));
    }
    progress.record(question.id, correct ? "correct" : "incorrect");
    const reference = Array.isArray(question.answer) ? question.answer.join("；") : question.answer;
    const content = feedbackContent(correct ? "回答正确，继续保持。" : "这题先放入待复习。", reference, question.explanation);
    setFeedback(content, correct ? "is-correct" : "is-incorrect");
    renderStats();
    renderQuestionMeta(question);
    renderDots();
  }

  function refresh() {
    state.visible = repo.filter({ ...state, progress });
    if (state.index >= state.visible.length) state.index = Math.max(0, state.visible.length - 1);
    const sectionLabel = state.section === "all" ? "全部专题" : state.section;
    elements.currentSectionLabel.textContent = state.chapter === "all" ? sectionLabel : sectionLabel + " · " + state.chapter;
    elements.questionCounter.textContent = state.visible.length ? `第 ${state.index + 1} / ${state.visible.length} 题` : "没有匹配的题目";
    elements.questionCard.hidden = state.visible.length === 0;
    elements.emptyState.hidden = state.visible.length !== 0;
    elements.previousQuestion.parentElement.hidden = state.visible.length === 0;
    renderSections();
    renderChapterFilter();
    renderStats();
    if (state.visible.length) renderQuestion();
  }

  elements.viewButtons.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  elements.answerForm.addEventListener("submit", gradeCurrentQuestion);
  elements.revealAnswer.addEventListener("click", () => reveal(currentQuestion()));
  elements.chapterFilter.addEventListener("change", (event) => { state.chapter = event.target.value; state.index = 0; refresh(); });
  elements.typeFilter.addEventListener("change", (event) => { state.type = event.target.value; state.index = 0; refresh(); });
  elements.reviewToggle.addEventListener("click", () => {
    state.reviewOnly = !state.reviewOnly;
    state.index = 0;
    elements.reviewToggle.setAttribute("aria-pressed", String(state.reviewOnly));
    refresh();
  });
  elements.previousQuestion.addEventListener("click", () => { state.index -= 1; renderQuestion(); });
  elements.nextQuestion.addEventListener("click", () => { state.index += 1; renderQuestion(); });
  elements.clearProgress.addEventListener("click", () => {
    if (window.confirm("确定清空本设备的全部练习记录吗？此操作无法恢复。")) {
      progress.clear();
      state.index = 0;
      refresh();
    }
  });
  elements.bankVersion.textContent = repo.version;
  renderKnowledge();
  refresh();
})();


