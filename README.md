# 🧠 VibeCode IDE – AI-Powered Browser IDE

**VibeCode IDE** is a fullstack browser-based development environment built with **Next.js**, **Monaco Editor**, and **StackBlitz WebContainers**. It delivers a lightweight VS Code–like experience directly in the browser with real-time code execution, AI-assisted development, multi-framework starter templates, an integrated terminal, and persistent playgrounds.

---

## 🚀 Features

- 🔐 **Authentication with NextAuth/Auth.js** – Google OAuth login support.
- 🎨 **Modern Developer UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Multi-Framework Templates** – Supports React, Next.js, Express, Hono, Vue, and Angular.
- 🗂️ **Custom File Explorer** – Interactive nested file/folder management system.
- 🖊️ **Monaco Editor Integration** – Syntax highlighting, IntelliSense, and VS Code–like editing experience.
- 💡 **AI-Powered Coding Assistance** – AI suggestions and AI chat powered by local Ollama models.
- ⚙️ **WebContainers Runtime** – Run fullstack applications directly in the browser.
- 💻 **Integrated Terminal** – Interactive terminal experience powered by xterm.js.
- 🤖 **AI Chat Assistant** – Ask questions, refactor code, explain files, and improve productivity.
- 💾 **Persistent Playgrounds** – Save and manage coding workspaces with MongoDB.

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
| AI Integration   | Ollama                   |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/roshankrsu/vibecode-ide.git

cd vibecode-ide
```

### 2. Install Dependencies

```bash
npm install
```

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

NEXTAUTH_URL=http://localhost:3000

OLLAMA_BASE_URL=http://localhost:11434
```

### 4. Start Ollama

Install [Ollama](https://ollama.com/) and run:

```bash
ollama serve
```

Then pull/run your coding model:

```bash
ollama run qwen2.5-coder:7b
```

### 5. Start Development Server

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

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

* `Ctrl + Space` → Trigger AI suggestions
* `Tab` → Accept AI suggestion

---

## ✅ Roadmap

* [x] Google & GitHub Auth via NextAuth
* [x] Multiple stack templates
* [x] Monaco Editor + AI
* [x] WebContainers + terminal
* [x] AI chat for code assistance
* [ ] GitHub repo import/export
* [ ] Real-time collaboration
* [ ] One-click deploy via Vercel/Netlify

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [WebContainers](https://webcontainers.io/)
- [Ollama](https://ollama.com/)
- [xterm.js](https://xtermjs.org/)
- [Auth.js](https://authjs.dev/)
