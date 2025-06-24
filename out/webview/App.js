"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = __importStar(require("react"));
const vscode = acquireVsCodeApi();
function App() {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [input, setInput] = (0, react_1.useState)("");
    const sendMessage = () => {
        vscode.postMessage({ prompt: input });
        setMessages([...messages, "You: " + input]);
        setInput("");
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener("message", event => {
            const reply = event.data.reply;
            if (reply)
                setMessages(prev => [...prev, "AI: " + reply]);
        });
    }, []);
    return (react_1.default.createElement("div", { style: { padding: 10, fontFamily: "monospace" } },
        react_1.default.createElement("div", { style: { height: 400, overflowY: "scroll", border: "1px solid gray", padding: 5 } }, messages.map((msg, idx) => (react_1.default.createElement("div", { key: idx }, msg)))),
        react_1.default.createElement("input", { style: { width: "100%", marginTop: 10 }, value: input, onChange: e => setInput(e.target.value), onKeyDown: e => e.key === "Enter" && sendMessage(), placeholder: "Type a message with @filename" })));
}
