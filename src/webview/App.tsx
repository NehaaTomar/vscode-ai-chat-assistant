import React, { useState, useEffect } from "react";

declare function acquireVsCodeApi(): any;
const vscode = acquireVsCodeApi();

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    vscode.postMessage({ prompt: input });
    setMessages((prev) => [...prev, `You: ${input}`]);
    setInput("");
  };

  const attachFile = () => {
    vscode.postMessage({ type: "selectFile" });
  };

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const { reply, insertAtCursor } = event.data;

      if (reply) {
        setMessages((prev) => [...prev, `AI: ${reply}`]);
      }

      if (insertAtCursor) {
        setInput((prev) => prev + " " + insertAtCursor + " ");
      }
    });
  }, []);

  return (
    <div style={{ padding: "1rem", color: "#fff", fontFamily: "sans-serif" }}>
      <div
        style={{
          minHeight: "300px",
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid gray",
          padding: "0.5rem",
          background: "#111",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: "0.5rem" }}>
            {msg}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message with @filename"
        style={{
          width: "100%",
          padding: "0.5rem",
          background: "#222",
          color: "#fff",
          border: "1px solid #555",
        }}
      />

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          onClick={sendMessage}
          style={{
            padding: "0.5rem 1rem",
            background: "#007acc",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>

        <button
          onClick={attachFile}
          style={{
            padding: "0.5rem 1rem",
            background: "#444",
            color: "#fff",
            border: "1px solid #666",
            cursor: "pointer",
          }}
        >
          📎 Attach File
        </button>
      </div>
    </div>
  );
}
