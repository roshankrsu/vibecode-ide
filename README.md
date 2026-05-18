# VibeCode IDE 🚀

An AI-powered browser-based IDE that delivers a lightweight VS Code–inspired coding experience directly in the browser.

Built with **Next.js**, **Monaco Editor**, **Groq AI**, and **MongoDB**, VibeCode IDE allows developers to write, run, and manage code projects with AI-assisted development tools.

## Live Demo

🌐 https://vibecode-ide.vercel.app

---

## Features

### AI-Powered Development
- AI code autocomplete powered by **Groq**
- AI coding assistant chat for debugging, explanations, and refactoring
- Smart context-aware code suggestions

### Browser IDE Experience
- Monaco Editor with syntax highlighting and IntelliSense
- Interactive file explorer with nested folder/file management
- VS Code–inspired UI
- Dark / Light theme support
- Multi-tab file editing

### Code Execution
- Run JavaScript, Python, C, C++, Java, and HTML
- Browser preview for HTML projects
- Program stdin input support
- Cloud code execution via external compiler API

### Project Management
- Persistent playgrounds saved in MongoDB
- Create, edit, rename, and manage projects
- Starter templates for supported languages

### Authentication
- Google OAuth login
- GitHub OAuth login
- Secure authentication with **Auth.js / NextAuth**

### Deployment Ready
- Production-ready architecture
- Fully deployed on Vercel
- Cloud AI integration

---

## Tech Stack

| Category | Technology |
|--------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | Tailwind CSS, ShadCN UI |
| State Management | Zustand |
| Authentication | NextAuth / Auth.js |
| Database | MongoDB + Prisma |
| Code Editor | Monaco Editor |
| AI | Groq API |
| Code Execution | Online Compiler API |
| Hosting | Vercel |

---

## Supported Languages

- JavaScript
- Python
- C
- C++
- Java
- HTML

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/roshankrsu/vibecode-ide.git
cd vibecode-ide
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create:

```bash
.env.local
```

Add:

```env
DATABASE_URL=

AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXTAUTH_URL=http://localhost:3000

GROQ_API_KEY=

ONLINE_COMPILER_API_KEY=
```

---

## Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Push schema:

```bash
npx prisma db push
```

---

## Run Development Server

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---------|--------|
| Ctrl + Space | Trigger AI autocomplete |
| Tab | Accept AI suggestion |
| Ctrl + S | Save file |

---

## Project Structure

```txt
app/
components/
modules/
lib/
prisma/
public/
```

---

## Roadmap

- [x] AI autocomplete
- [x] AI chat assistant
- [x] Multi-language code execution
- [x] Monaco editor integration
- [x] Persistent playgrounds
- [x] Authentication
- [x] Production deployment

### Planned
- [ ] GitHub repository import/export
- [ ] Real-time collaboration
- [ ] Multiplayer editing
- [ ] One-click deployment
- [ ] True interactive terminal execution

---

## Why This Project?

VibeCode IDE demonstrates building a production-grade browser IDE with:

- AI-assisted development workflows
- modern fullstack architecture
- cloud-based code execution
- scalable developer tooling

---

## License

MIT License

---

## Acknowledgements

- Next.js
- Monaco Editor
- Groq
- Prisma
- Auth.js
- ShadCN UI
