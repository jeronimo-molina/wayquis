# 🧠 Wayquis - Notes from Obsidian to Blog

A minimalist "Digital Garden" starter kit built with **Next.js**, **Tailwind CSS**, and **Obsidian**.

This project allows you to publish your Obsidian notes directly to the web. It is designed to be a "set it and forget it" solution: write locally, push to GitHub, and your site updates automatically.

## 🚀 Features

- **Obsidian First:** Write in Markdown, keep your wikilinks logic.
- **Git-Based CMS:** No database needed. Your file system is your database.
- **Dark Mode Native:** Styled with a "Terminal/Hacker" aesthetic using Tailwind CSS.
- **Privacy Focused:** The `content/` folder is ignored by default in the repo structure, allowing you to share the code without sharing your private notes (unless you want to).

## 🛠️ How to Use (The Workflow)

### 1. Setup
Clone this repository and install dependencies:

```bash
npm install
npm run dev
```

### 2. Writing Content
This starter kit looks for Markdown files inside the content/ folder.

Open your Obsidian vault or file explorer.

Drag and drop your .md notes into the content/ folder of this project.

Crucial: Ensure your notes have the required Frontmatter at the top:

```YAML
---
title: "My Note Title"
date: "2024-03-20"
---
```

3. Publishing
To publish your changes, simply commit and push to GitHub. If you have connected this repo to a service like Render or Vercel, it will auto-deploy.

```Bash
git add .
git commit -m "New notes added"
git push origin main
```

📦 Tech Stack
Next.js (App Router)
Tailwind CSS
Gray-Matter (Markdown parsing)
Remark (HTML serialization)

Created by [Jeronimo Molina](https://wayquis.com.br)