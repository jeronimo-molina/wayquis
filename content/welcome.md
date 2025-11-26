---
title: "Welcome to Wayquis Starter Kit 🚀"
date: "2025-11-26"
---

# Hi!

If you see that page, it means your Wayquis Obsidian work correctly. Congrats! 🎉

This blog read markdown files directly from `content` folder.

## How to use?

1.  **Clone this repository** to your own computer.
2.  Install all dependencies:
    
    ```bash
    npm install
    ```
3.  Runs the local server:
    
    ```bash
    npm run dev
    ```

## How to add my notes?

That system are setup to ignore your personal notes on Git or GitHub. To change this you need to do:

1.  Open `content` folder in your computer
2.  Move your notes from Obsidian to `content` folder. Check if you are is in. Atention: only files with `.md` extension works in this system.
3.  Checks if your notes has **Frontmatter** at top, like this example below: 
    
    ```yaml
    ---
    title: "Note's title"
    date: "2024-05-20"
    ---
    ```

After you add a note with frontmatter, it's automatically shows up on frontpage!

---
*This project are made by Jeronimo Molina, with Next.js, Tailwind and a lot of ☕.*