# 🎧 Aurem

**Aurem** is a music management platform that allows users to save and organize their music collection with artist and album information. Built with **React**, **TypeScript**, and **Webpack**, Aurem is lightweight, developer-friendly, and primed for future enhancements.

---

## 📁 Folder Structure

```
    Aurem/
    ├── public/
    │ └── index.html
    ├── src/
    │ ├── App.tsx
    │ ├── index.tsx
    │ └── index.css
    ├── .babelrc
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── README.md
```
---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

---

### 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EyosiSol/Aurem.git
   cd Aurem

   ```

2. Install Dependencies

   ```bash
   npm install

   ```

3. Start the local dev server
   ```bash
   npm start
   ```

then visit http://localhost:3000

4. Build for Production

   ```
   npm run build

   ```

5. Techstack used

- React 19
- Typescript
- Webpack 5
- Babel (for Jsx + modern Js support)
- Html Webpack Plugin
- CSS (Vanilla CSS)

6. Config Overview:

.babelrc
```json
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

tsconfig.json

- Configured for strict type-checking and React JSX support.

webpack.config.js
Supports: - React + TypeScript entry - CSS loading with style-loader and css-loader - Development server on port 3000 - HTML template generation from public/index.html

### License
This project is licensed under the ISC License.