
---

## 🧠 AI Chat Assistant – VS Code Extension

A smart, React-powered chat assistant built right inside Visual Studio Code. It understands your code context, supports file mentions via `@filename`, and can generate or manipulate code using natural language prompts. Works with real AI via OpenRouter or mocked responses for seamless demos.

---

### 📺 Live Demo

[![Watch the demo video](https://img.youtube.com/vi/lHGqj5WR-0I/hqdefault.jpg)](https://youtu.be/lHGqj5WR-0I)

👉 [https://youtu.be/lHGqj5WR-0I](https://youtu.be/lHGqj5WR-0I)
---

### ✨ Key Features

* React-based WebView chat panel embedded in VS Code
* Supports `@filename` syntax to fetch workspace file contents
* Attach files/images using a 📎 button or `@mention`
* Fetch AI responses via **OpenRouter (free)** or **OpenAI (paid)**
* Clean UI with markdown & syntax-highlighted code blocks
* Easily extendable and fully open-source

---

### 🛠 Tech Stack

* **Language:** TypeScript
* **Backend:** VS Code Extension API + Node.js
* **Frontend:** React (WebView)
* **Bundling:** Webpack
* **Environment:** dotenv for API key management
* **AI Models:** OpenRouter’s LLaMA 3 / Mistral (free) or OpenAI GPT-3.5/4

---

### 🔧 Project Structure

```
.
├── src/
│   ├── extension.ts          # VS Code backend (handles chat and file mentions)
│   └── webview/
│       ├── main.tsx          # React entry for WebView
│       └── App.tsx           # Chat UI component
├── dist/                     # Compiled code (extension bundled)
├── .env                      # Add your API key here
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

2. **Add your API key**

   * For **OpenRouter** (free):

     ```
     OPENAI_API_KEY=sk-or-...
     ```
   * For **OpenAI** (paid):

     ```
     OPENAI_API_KEY=sk-...
     ```

3. **Build the extension**

   ```bash
   npm run build
   ```

4. **Run in VS Code**

   * Open the project in VS Code
   * Press `F5` to launch the Extension Development Host
   * Execute the `Start AI Chat` command from the command palette

5. **Start chatting!**

   * Ask questions like `python code for addition`
   * Use `@filename.py` to fetch and embed file contents
   * Use the 📎 button to attach files manually

---

### 🎯 Why It Matters

* 🚀 Showcases combining frontend (React) + backend (TypeScript) + AI in a real developer tool
* 📂 Demonstrates practical workspace integration (file mentions)
* 🤖 Future-ready: plugs into real AI APIs or uses mock/fallback modes
* 🎥 Ideal for portfolio/interview demos (see the video linked above)

---

### 📚 Usage & Examples

1. **Make code requests**

   ```
   python code for addition
   ```

2. **Reverse a string**

   ```
   reverse a string
   ```

3. **Embed a file**

   ```
   @example.py
   ```

   – or click 📎 to attach it manually

4. **Get AI-generated responses**
   Works instantly for demo mode; requires a valid API key for live usage

---

### 🤝 Contributing & License
* Feel free to submit issues or pull requests
* This project is licensed under the MIT License.
[MIT LICENSE](LICENSE)

---

### 📎 Author & Contact
* **Neha Tomar**
* Demo recorded using OBS Studio
* Video link: [https://youtu.be/lHGqj5WR-0I](https://youtu.be/lHGqj5WR-0I)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=for-the-badge)](https://inspiring-palmier-dd7dd4.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-NehaaTomar-black?style=for-the-badge&logo=github)](https://github.com/NehaaTomar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Follow-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/neha-tomar-52b212224)
[![Gmail](https://img.shields.io/badge/Gmail-MailMe-red?style=for-the-badge&logo=gmail)](mailto:nehatomar349@gmail.com)



---
