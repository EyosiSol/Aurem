
# 🎧 Aurem

**Aurem** is a music management platform that allows users to save and organize their music collection with artist and album information. Built with **React**, **TypeScript**, and **Webpack**, Aurem is lightweight, developer-friendly, and primed for future enhancements.

---

## 📁 Folder Structure

```
Aurem/
├── base-api/             # API utility methods (e.g., fetch, delete)
├── components/           # React components (Header, Filter, Modals, Music Cards)
├── data/                 # Local seed data (if any)
├── dist/                 # Production build output (Webpack)
├── public/               # Static files (HTML template, icons)
├── src/                  # Main React entry point
├── types/                # TypeScript types (musicCard types, etc.)
├── utils/                # Utility functions (e.g., debounce)
├── db.json               # Mock database used by json-server
├── package.json          # Project metadata and dependencies
├── webpack.config.mjs    # Webpack configuration
├── tsconfig.json         # TypeScript compiler configuration
├── .babelrc              # Babel config
├── .env                  # Environment variables
├── .prettierrc           # Prettier formatting rules
├── .eslintrc / config    # ESLint configuration
└── README.md             # Project overview
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- `json-server v.0.17.3` (globally or via `npx`)

### 📦 Installation

```bash
npm install
```

### ▶️ Run the App

Open two terminals one for JSON-Server and one for Development Server

```bash
# Terminal 1: Run JSON server on port 5000
npx json-server --watch db.json --port 5000

# Terminal 2: Start development server
npm start
```

- App: http://localhost:3000
- API: http://localhost:5000/musics

---

## 🛠 Tech Stack

| Area            | Technology       |
|-----------------|------------------|
| Frontend        | React, TypeScript |
| Styling         | CSS              |
| Module Bundler  | Webpack          |
| Transpiler      | Babel            |
| Dev Server      | Webpack Dev Server |
| Mock API        | json-server      |
| Linting         | ESLint           |
| Formatting      | Prettier         |

---

## 📦 package.json Breakdown

```json
"scripts": {
  "start": "webpack serve --config webpack.config.mjs",
  "build": "webpack --config webpack.config.mjs",
  "lint": "eslint . --ext .ts,.tsx"
},
"dependencies": {
  "react": "...",
  "react-dom": "..."
},
"devDependencies": {
  "@babel/core": "...",
  "babel-loader": "...",
  "webpack": "...",
  "typescript": "...",
  "eslint": "...",
  "prettier": "..."
}
```

- **start** – Launches Webpack Dev Server
- **build** – Compiles production build to `/dist`
- **lint** – Lints all `.ts` and `.tsx` files

---

## ⚙️ Webpack & Babel Setup

### Webpack (`webpack.config.mjs`)

- **Entry**: `src/index.tsx`
- **Output**: `dist/main.js`
- **Loaders**:
  - `babel-loader` for JSX and TypeScript
  - `style-loader` and `css-loader` for CSS
- **Dev Server**: Runs on `localhost:3000`

### Babel (`.babelrc`)

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
}
```

---

## 💡 Linting and Formatting

### ESLint (`eslint.config.cjs`)
Custom linting rules for TypeScript and React.

### Prettier (`.prettierrc`)
Ensures consistent code style.

### Run Linter

```bash
npm run lint
```

---

## 🌱 Future Enhancements
- Incorporate a Backend instead of using Json-server (e.g., MongoDB, Firebase)
- Add real authentication and user accounts
- Improve accessibility and performance
- Write unit and integration tests with Jest or React Testing Library


---

## 📃 License

MIT License — feel free to use, contribute, or modify.

---

## 🙌 Acknowledgements

Thanks for checking out **Aurem**! Built with love using React and TypeScript.
