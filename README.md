# 北交所笔试背诵站

一个无需后端的静态练习站，围绕北交所、会计与审计高频知识点设计填空、主观挖空和自由默写练习。

## 本地打开

直接双击 `dist/index.html` 即可使用。为了获得与 GitHub Pages 一致的体验，也可以在项目根目录运行：

```powershell
python -m http.server 4173 --directory dist
```

再访问 `http://localhost:4173`。

## 题库与学习记录

- 题库在 `dist/data/questions.js`，按题目对象扩充；不要把原始 PDF 上传到公开仓库。
- 学习记录保存在当前浏览器的 `localStorage`，不同设备不会同步。题库更新后，既有本地学习记录会保留。
- 后续只要把新资料或需要加入的记忆点发给 Codex，即可按现有题库格式补题并发布。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个 **Public** 仓库，例如 `bse-study`。
2. 在本项目根目录执行：

   ```powershell
   git init
   git add .
   git commit -m "feat: add BSE study site"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/bse-study.git
   git push -u origin main
   ```

3. 打开仓库的 **Settings → Pages**，在 **Build and deployment** 中选择 **GitHub Actions**。
4. 等待 `Deploy static site to GitHub Pages` 工作流完成；站点地址会显示在 Pages 页面，通常为 `https://<你的用户名>.github.io/bse-study/`。

每次更新题库后提交并推送，站点将自动重新发布。

