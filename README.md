# 🧠 VibeCode IDE – AI-Powered Browser IDE

**VibeCode IDE** is a fullstack browser-based development environment built with **Next.js**, **Monaco Editor**, **Groq AI**, and **StackBlitz WebContainers**.

It delivers a lightweight VS Code–like experience directly in the browser with:
- real-time code execution
- AI-assisted development
- multi-framework starter templates
- integrated terminal
- persistent playgrounds
- AI chat & autocomplete

---

## 🚀 Live Demo

Live App: https://vibecode-ide.vercel.app

---

## 🚀 Features

- 🔐 **Authentication with NextAuth/Auth.js** – Google & GitHub OAuth support.
- 🎨 **Modern Developer UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Multi-Framework Templates** – Supports React, Next.js, Express, Hono, Vue, and Angular.
- 🗂️ **Custom File Explorer** – Interactive nested file/folder management system.
- 🖊️ **Monaco Editor Integration** – Syntax highlighting, IntelliSense, and VS Code–like editing experience.
- 💡 **AI-Powered Coding Assistance** – AI suggestions and AI chat powered by Groq-hosted LLMs.
- ⚙️ **WebContainers Runtime** – Run fullstack applications directly in the browser.
- 💻 **Integrated Terminal** – Interactive terminal experience powered by xterm.js.
- 🤖 **AI Chat Assistant** – Ask questions, refactor code, explain files, and improve productivity.
- 💾 **Persistent Playgrounds** – Save and manage coding workspaces with MongoDB.
- 🚀 **Production Deployment** – Fully deployed on Vercel with cloud AI integration.

---

## 🧱 Tech Stack

| Layer            | Technology               |
| ---------------- | ------------------------ |
| Framework        | Next.js 16 (App Router)  |
| Language         | TypeScript               |
| State Management | Zustand                  |
| Styling          | TailwindCSS, ShadCN UI   |
| Authentication   | NextAuth/Auth.js         |
| Database         | MongoDB + Prisma         |
| Editor           | Monaco Editor            |
| Runtime          | StackBlitz WebContainers |
| Terminal         | xterm.js                 |
| AI Integration   | Groq API                 |
| Hosting          | Vercel                   |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/roshankrsu/vibecode-ide.git

cd vibecode-ide
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Then configure the following variables:

```env
DATABASE_URL=

AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXTAUTH_URL=http://localhost:3000

GROQ_API_KEY=
```

---

### 4. Configure Groq API

Create a Groq API key:

https://console.groq.com

Add it to your `.env.local`:

```env
GROQ_API_KEY=
```

---

### 5. Start Development Server

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

---

## ⚠️ WebContainers Requirement

This project uses **StackBlitz WebContainers**, which require browser isolation headers:

```txt
Cross-Origin-Opener-Policy
Cross-Origin-Embedder-Policy
```

These headers are already configured in `next.config.ts`.

---

## 📁 Project Structure

```txt
.
├── app/                      # App Router pages & API routes
├── components/               # Shared UI components
├── modules/                  # Feature-based modules
├── lib/                      # Utilities and helpers
├── public/                   # Static assets
├── vibecode-starters/        # Starter templates
├── prisma/                   # Prisma schema
├── .env.example              # Environment variable template
└── README.md
```

---

## 🎯 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Space` | Trigger AI suggestions |
| `Tab` | Accept AI suggestion |

---

## ✅ Roadmap

- [x] Google & GitHub Auth via NextAuth
- [x] Multiple stack templates
- [x] Monaco Editor + AI
- [x] WebContainers + terminal
- [x] AI chat for code assistance
- [x] AI autocomplete
- [x] Persistent playgrounds
- [x] Production deployment on Vercel
- [ ] GitHub repo import/export
- [ ] Real-time collaboration
- [ ] Multiplayer editing
- [ ] One-click deployment

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- https://nextjs.org
- https://webcontainers.io
- https://microsoft.github.io/monaco-editor/
- https://groq.com
- https://xtermjs.org
- https://authjs.dev

---