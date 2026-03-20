# 🔍 RAG Pipeline Flashcards

> Next.js 14 flashcard app with 50 cards across 10 RAG topics — chunking, embeddings, vector stores, RAGAS evaluation & more. Features 3D flip animation, keyboard shortcuts, category filtering, per-topic progress tracking, and review mode.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![Cards](https://img.shields.io/badge/Flashcards-50-7C3AED?style=flat-square)
![Topics](https://img.shields.io/badge/Topics-10-06B6D4?style=flat-square)

---

## 📸 Screenshots

### Main View
![Main View](public/screenshots/01-main-view.png)

### Card Flipped — Answer Side
![Card Flipped](public/screenshots/02-card-flipped.png)

### Category Filter — Embeddings
![Category Filter](public/screenshots/03-embeddings-category.png)

### Progress Tracking — 12 Cards Known
![Progress Tracking](public/screenshots/04-progress-tracking.png)

### RAGAS Evaluation — Answer Side
![RAGAS Answer](public/screenshots/05-ragas-flipped.png)

### Review Mode — Unknown Cards Only
![Review Mode](public/screenshots/06-review-mode.png)

---

## ✨ Features

- **3D flip animation** — smooth CSS `rotateY` on click to reveal answers
- **Keyboard shortcuts** — `←` `→` to navigate, `Space` to flip, `G` to mark as known
- **10 topic categories** — filter cards by specific RAG topic
- **Per-topic progress bars** — track mastery across sidebar and footer grid
- **Review mode** — focus only on cards you haven't mastered yet
- **Session stats** — live Known / Remaining / Progress% chips in the header
- **🎉 Completion screen** — celebrate when all cards are mastered
- **Dark theme** — deep navy palette with color-coded category accents

---

## 📚 Topics Covered

| # | Topic | Cards |
|---|-------|-------|
| 1 | RAG Fundamentals | 5 |
| 2 | Chunking | 5 |
| 3 | Embeddings | 5 |
| 4 | Vector Stores | 5 |
| 5 | Retrieval | 5 |
| 6 | LLM Generation | 5 |
| 7 | RAGAS Evaluation | 6 |
| 8 | Experiments | 5 |
| 9 | Advanced Features | 4 |
| 10 | Architecture & Tools | 5 |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/VijayKumaro7/rag-flashcards.git
cd rag-flashcards

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 🗂️ Project Structure

```
rag-flashcards/
├── app/
│   ├── page.tsx              # Main page — all state logic
│   ├── layout.tsx            # Root layout + metadata
│   └── globals.css           # Dark theme + 3D flip CSS
├── components/
│   ├── FlashCard.tsx         # 3D flip card with progress bar
│   ├── CategorySidebar.tsx   # Sticky sidebar with per-topic progress
│   └── StatsBar.tsx          # Top bar with Known/Remaining/Progress chips
├── data/
│   └── flashcards.ts         # All 50 cards typed with TypeScript
└── public/
    └── screenshots/          # UI screenshots for README
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Flip card |
| `←` or `H` | Previous card |
| `→` or `L` | Next card |
| `G` | Mark as "Got it" |

---

## 🛠️ Tech Stack

- **Next.js 14** — App Router, static export
- **TypeScript** — Fully typed flashcard data and components
- **Tailwind CSS** — Utility-first styling
- **CSS 3D Transforms** — `perspective` + `rotateY` for card flip
- **React Hooks** — `useState`, `useEffect`, `useCallback` for state management

---

## 📄 License

MIT — free to use, fork, and extend.

---

Built by [Vijay Kumar](https://github.com/VijayKumaro7) · Part of the RAG Pipeline portfolio project
