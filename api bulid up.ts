import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Chat Application Framework
// Built with React + Tailwind + shadcn/ui
// Framework Docs: https://react.dev
// Styling: https://tailwindcss.com
// UI Components: https://ui.shadcn.com
// State management (optional): https://redux.js.org
// Backend integration: https://expressjs.com
// WebSockets for real-time chat: https://socket.io

export default function ChatAppFramework() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I’m Rony’s AI Assistant. How can I help you today?" },
  ]);

  const sendPrompt = () => {
    if (!prompt.trim()) return;
    setMessages((m) => [...m, { role: "user", text: prompt }]);
    // Placeholder for AI response
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: "(Demo) This is where the AI’s response will appear." }]);
    }, 500);
    setPrompt("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-zinc-900 border-zinc-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Rony’s AI Assistant Chat</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chat Window */}
          <div className="h-[400px] overflow-y-auto space-y-3 mb-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${m.role === "user" ? "bg-indigo-600" : "bg-zinc-800"} rounded-2xl px-4 py-2 max-w-[75%] text-sm leading-relaxed shadow`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
              className="bg-zinc-800 border-zinc-700"
            />
            <Button onClick={sendPrompt}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
