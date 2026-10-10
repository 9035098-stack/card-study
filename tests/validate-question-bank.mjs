import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../dist/data/questions.js", import.meta.url), "utf8");
const context = { globalThis: {} };
vm.runInNewContext(source, context);
const bank = context.globalThis.QUESTION_BANK;
const validTypes = new Set(["blank", "cloze_subjective", "free_response"]);

if (!bank || !Array.isArray(bank.questions) || bank.questions.length < 20) throw new Error("题库未加载或题量不足。");
const ids = new Set();
for (const question of bank.questions) {
  for (const key of ["id", "section", "type", "prompt", "answer", "explanation", "tags", "difficulty"]) {
    if (question[key] === undefined || question[key] === "") throw new Error(`${question.id || "未知题目"} 缺少 ${key}`);
  }
  if (ids.has(question.id)) throw new Error(`题目 ID 重复：${question.id}`);
  ids.add(question.id);
  if (!validTypes.has(question.type)) throw new Error(`题型不支持：${question.type}`);
  if (!Array.isArray(question.tags) || !question.tags.length) throw new Error(`${question.id} 缺少标签`);
  if (!Number.isInteger(question.difficulty) || question.difficulty < 1 || question.difficulty > 3) throw new Error(`${question.id} 难度应为 1-3`);
  if (question.type === "cloze_subjective") {
    const blankCount = (question.prompt.match(/\{\{\d+\}\}/g) || []).length;
    if (!Array.isArray(question.answer) || blankCount !== question.answer.length) throw new Error(`${question.id} 的挖空与答案数量不一致`);
  } else if (typeof question.answer !== "string") {
    throw new Error(`${question.id} 的答案应为文本`);
  }
}
console.log(`题库验证通过：${bank.questions.length} 题，${new Set(bank.questions.map((question) => question.section)).size} 个专题。`);

