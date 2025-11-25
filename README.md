# Digital Garden 🌱

A personal knowledge management site that visualizes your Obsidian notes as an interactive digital garden. Built with Next.js, Tailwind CSS, and React Force Graph.

## Features

- **Interactive Graph View**: A 2D force-directed graph showing connections between your notes.
- **Obsidian Compatibility**: Supports `[[Wikilinks]]` to automatically link notes.
- **Post-Modern Design**: A dark, high-contrast aesthetic with purple accents and monospaced typography.
- **Responsive**: Fully responsive layout for mobile and desktop.
- **Auto-Sync**: Simply push your markdown files to the repo to update the site.

## Project Structure

- `content/`: Place your Obsidian markdown files (`.md`) here.
- `src/app/`: Next.js App Router pages.
- `src/components/Graph.tsx`: The interactive graph component.
- `src/lib/markdown.ts`: Logic for parsing Markdown and extracting graph data.

---

## 🚀 Deployment Guide

### Phase 1: GitHub Repository Setup

1.  **Create a Repository on GitHub**:
    - Go to [GitHub.com](https://github.com) and sign in.
    - Click the **+** icon in the top-right and select **New repository**.
    - Name it `digital-garden` (or whatever you prefer).
    - Make it **Public** or **Private**.
    - **Do not** initialize with README, .gitignore, or license (we already have them).
    - Click **Create repository**.

2.  **Push Your Code**:
    Open your terminal in the project folder (`d:\projects\wayquis\digital-garden`) and run these commands:

    ```bash
    # Initialize git if you haven't already
    git init

    # Add all files
    git add .

    # Commit the files
    git commit -m "Initial commit: Digital Garden setup"

    # Rename branch to main
    git branch -M main

    # Link to your new GitHub repo (replace URL with your actual repo URL)
    git remote add origin https://github.com/YOUR_USERNAME/digital-garden.git

    # Push to GitHub
    git push -u origin main
    ```

### Phase 2: Deploy to Render

1.  **Create a Render Account**:
    - Go to [Render.com](https://render.com) and sign up (you can log in with GitHub).

2.  **Create a New Web Service**:
    - Click the **New +** button and select **Web Service**.
    - Click **Build and deploy from a Git repository**.
    - Connect your GitHub account if prompted.
    - Select your `digital-garden` repository.

3.  **Configure the Service**:
    - **Name**: `digital-garden` (or your preferred name).
    - **Region**: Choose the one closest to you (e.g., Ohio, Frankfurt).
    - **Branch**: `main`.
    - **Root Directory**: Leave blank (defaults to root).
    - **Runtime**: `Node`.
    - **Build Command**: `npm install && npm run build` (Render might auto-detect this).
    - **Start Command**: `npm start`.
    - **Plan**: Select **Free**.

4.  **Deploy**:
    - Click **Create Web Service**.
    - Render will start building your app. You can watch the logs. Once it says "Live", your site is online!

### Phase 3: Custom Domain (Optional)

1.  **Add Custom Domain in Render**:
    - Go to your Web Service dashboard on Render.
    - Click on **Settings** > **Custom Domains**.
    - Click **+ Add Custom Domain**.
    - Enter your domain name (e.g., `www.yourdomain.com` or `garden.yourdomain.com`).

2.  **Configure DNS**:
    - Render will provide you with a **CNAME** record (e.g., `digital-garden.onrender.com`) and/or an **A** record.
    - Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
    - Add the records provided by Render to your DNS settings.
    - **Verification**: It might take a few minutes to a few hours for the DNS to propagate. Render will automatically provision an SSL certificate (HTTPS) for you once verified.

---

## 📝 How to Add Notes

1.  Write your notes in Obsidian.
2.  Copy the `.md` files you want to publish into the `content/` folder of this project.
3.  Run the following commands to update your live site:

    ```bash
    git add .
    git commit -m "Update notes"
    git push
    ```

Render will detect the push to the `main` branch and automatically redeploy your site with the new content.
