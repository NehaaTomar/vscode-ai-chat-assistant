import * as vscode from 'vscode';

import * as path from 'path';

import OpenAI from 'openai';

import * as dotenv from 'dotenv';


export function activate(context: vscode.ExtensionContext) {

console.log("✅ AI Chat Extension activated");

dotenv.config({

path: path.join(__dirname, '..', '.env'),

});

console.log("🔑 Loaded KEY =", process.env.OPENAI_API_KEY);



let openai: OpenAI | null = null;


try {

if (!process.env.OPENAI_API_KEY) {

vscode.window.showWarningMessage("⚠️ OPENAI_API_KEY not found in .env");

} else {

openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

}

} catch (err: any) {

vscode.window.showErrorMessage("❌ Failed to initialize OpenAI: " + err.message);

}


context.subscriptions.push(

vscode.commands.registerCommand('aiChat.start', () => {

const panel = vscode.window.createWebviewPanel(

'aiChat',

'AI Chat Assistant',

vscode.ViewColumn.One,

{

enableScripts: true,

localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'dist'))],

}

);


const scriptUri = panel.webview.asWebviewUri(

vscode.Uri.file(path.join(context.extensionPath, 'dist', 'main.js'))

);


const styleUri = panel.webview.asWebviewUri(

vscode.Uri.file(path.join(context.extensionPath, 'dist', 'style.css'))

);


panel.webview.html = getWebviewContent(scriptUri.toString(), styleUri.toString());


panel.webview.onDidReceiveMessage(async (message) => {

let { prompt } = message;


if (prompt.includes('@')) {

const regex = /@(\S+)/g;

let match;

while ((match = regex.exec(prompt)) !== null) {

const fileName = match[1];

const files = await vscode.workspace.findFiles(`**/${fileName}`);

if (files.length > 0) {

const doc = await vscode.workspace.openTextDocument(files[0]);

const fileContent = doc.getText();

prompt += `\n\nContents of ${fileName}:\n${fileContent}`;

}

}

}


if (!openai) {

panel.webview.postMessage({

reply: '❌ OpenAI is not initialized. Please check your .env file.',

});

return;

}


try {

const response = await openai.chat.completions.create({

model: 'gpt-3.5-turbo',


messages: [{ role: 'user', content: prompt }],

});


panel.webview.postMessage({ reply: response.choices[0].message.content });

} catch (err: any) {

console.error(err);

panel.webview.postMessage({ reply: `❌ Error calling OpenAI API: ${err.message}` });

}

});

})

);

}


function getWebviewContent(jsUri: string, cssUri: string): string {

return `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="${cssUri}">

<title>AI Chat</title>

</head>

<body>

<div id="root"></div>

<script src="${jsUri}"></script>

</body>

</html>

`;

}