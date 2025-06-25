

---

## 🧠 AI Chat Assistant – VS Code Extension

A smart, React-powered chat assistant built right inside Visual Studio Code. It understands your code context, supports file mentions via `@filename`, previews images or videos, and can generate or manipulate code using natural language prompts. Powered by **OpenRouter** and **Hugging Face BLIP** APIs – or mock data for demo.

---

### 📺 Live Demo

[![Watch the demo video](https://img.youtube.com/vi/lHGqj5WR-0I/hqdefault.jpg)](https://youtu.be/lHGqj5WR-0I)

👉 [https://youtu.be/lHGqj5WR-0I](https://youtu.be/lHGqj5WR-0I)

---

### ✨ Key Features

* 🧠 AI-powered chat via **OpenRouter** (free) or OpenAI (paid)
* 🖼️ Supports `@filename` to attach workspace files
* 🌐 Recognizes and previews public image URLs (`@https://...jpg`)
* 📎 Click-to-attach files with inline previews for images/videos
* 📄 Inline previews for `.jpg`, `.png`, `.mp4`, fallback for `.pdf`, `.docx`, `.md`
* 💬 Clean markdown rendering and code block formatting (` ``` `)
* 🛡️ Safe file-size handling (1MB max)
* 🧪 Mock fallback mode for demo without live API

---

### 🛠 Tech Stack

* **Language:** TypeScript
* **Backend:** VS Code Extension API + Node.js
* **Frontend:** React (WebView)
* **Bundler:** Webpack
* **Environment:** dotenv for API keys
* **AI Services:**

  * Text: OpenRouter (Mistral / LLaMA)
  * Image: Hugging Face BLIP for captioning

---

### 🔧 Project Structure

```
.
├── src/
│   ├── extension.ts          # VS Code backend (handles chat, file parsing)
│   └── webview/
│       ├── main.tsx          # React entry for WebView
│       └── App.tsx           # Chat UI (file mentions, rendering)
├── dist/                     # Compiled extension assets
├── .env                      # API keys (not committed)
├── package.json
├── webpack.config.js
└── README.md
```

---

### ✅ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/NehaaTomar/vscode-ai-chat-assistant.git
   cd vscode-ai-chat-assistant
   npm install
   ```

2. **Add your API keys to `.env`**

   ```
   OPENROUTER_API_KEY=sk-or-your-openrouter-key
   ```

3. **Build the extension**

   ```bash
   npm run build
   ```

4. **Run inside VS Code**

   * Open the project folder in VS Code
   * Press `F5` to open the Extension Development Host
   * From the Command Palette, run: `Start AI Chat`

---

### 🧪 Usage Examples

1. **Ask for code**

   ```
   write python code for prime number
   ```

2. **Attach a workspace file**

   ```
   @example.py
   ```

3. **Link a public image**

   ```
   @https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg
   ```

4. **Get caption from local image file**

   * Click 📎 or type `@check.jpg` if the file is in workspace

5. **Embed file content or fallback**

   * `.jpg`, `.png` → Image preview + caption
   * `.mp4` → Video player
   * `.pdf`, `.md`, `.docx` → Shown as non-previewable file
   * Code/text files → Shown inside triple backticks (\`\`\`) with syntax highlight

---

### ⚠️ Known Limits

* Max file size: 1MB
* Non-image/video/doc files get embedded as text (first 5000 chars)
* Public Google redirect image URLs (`imgres?imgurl=...`) are parsed to real image URLs internally

---

### 🎯 Why Use This?

* 📦 Combines full-stack extension (VS Code + React + AI APIs)
* 💼 Great portfolio project – deployable or mock-demo friendly
* 🔍 Shows real-time file integration with AI reasoning
* 🖼️ Includes free Hugging Face BLIP image-to-text captions
* 🔧 Easy to extend with your own models or APIs

---

### 🤝 Contributing & License

* Issues and PRs welcome!
* Licensed under MIT
  [MIT LICENSE](LICENSE)

---

### 🙋 Author & Contact

* **Neha Tomar**
* 📹 Demo recorded with OBS Studio
* [📺 Demo Video](https://youtu.be/lHGqj5WR-0I)
* [🌐 Portfolio](https://inspiring-palmier-dd7dd4.netlify.app/)
* [![GitHub](https://img.shields.io/badge/GitHub-NehaaTomar-black?style=for-the-badge\&logo=github)](https://github.com/NehaaTomar)
* [![LinkedIn](https://img.shields.io/badge/LinkedIn-Follow-blue?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/neha-tomar-52b212224)
* [![Gmail](https://img.shields.io/badge/Gmail-MailMe-red?style=for-the-badge\&logo=gmail)](mailto:nehatomar349@gmail.com)

---

