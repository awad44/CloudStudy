# Cloud Computing Study Space

A responsive, static study site for Cloud Computing Fundamentals. It uses no backend and has no public file-upload interface. Practice activity, bookmarks, and mistakes stay in the visitor’s browser using local storage.

## Run locally

Open `index.html` in a browser or serve this folder with a static file server. GitHub Pages publishes the same files directly.

## Course files and questions

Official PDFs are in `lectures/`; visitors can preview, open, and download them. Only the owner replaces or removes PDFs in the local project, then reviews the question bank and publishes the change. No public upload interface exists.

Each lecture has 36 questions: 30 grounded in that lecture PDF (10 Easy, 10 Medium, 10 Hard) plus 6 bonus questions (2 Junior, 2 Senior, 2 Interview). Difficulty, question style (Fundamentals, Applied, Scenarios), and bonus audience are independent filters. Course questions cite a PDF page; bonus questions cite the relevant NIST or AWS source. The site supports practice and exam modes, flexible session lengths, progress/history, bookmarks, and retrying mistakes.

## Repeatable update and GitHub Pages workflow

1. Add, replace, or remove the official lecture PDF in `lectures/` locally. Update the matching lecture card and PDF link in `index.html`.
2. Review or update that lecture’s 30 PDF-grounded questions in `questions.js`. Keep 10 questions at each difficulty, check every answer against the PDF, and verify each `page` value. Bonus questions use `sourceType: "bonus"`, an `audience`, and a direct `sourceUrl`.
3. Preview the site locally. Check PDF open/download/preview, filters, both quiz modes, source links, and mobile layout.
4. Commit and push the reviewed files to the repository’s default branch.
5. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once. The included workflow deploys on pushes to the default branch.

The Pages workflow uses GitHub’s Pages artifact and deployment actions. The site contains no credentials or server-side upload workflow.
