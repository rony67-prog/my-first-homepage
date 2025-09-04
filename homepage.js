import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Bot, Shield, Zap, Github, Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function RonyAIAssistantLanding() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { role: "user", text: "Plan a weekend trip near Kolkata under ₹10k." },
    { role: "assistant", text: "Sure! Here’s a 2-day plan for Santiniketan with breakdowns for travel, stay, food, and must‑do experiences." },
  ]);

  const sendPrompt = () => {
    if (!prompt.trim()) return;
    setMessages((m) => [...m, { role: "user", text: prompt }, { role: "assistant", text: "(Demo) I'd analyze options, compare prices, and craft a personalized plan for you in seconds." }]);
    setPrompt("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 shadow-lg">
              <Bot className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Rony’s AI</span>
            <Badge variant="secondary" className="ml-2 text-xs bg-zinc-800">Assistant</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <a href="mailto:hello@ronys.ai"><Mail className="h-4 w-4 mr-2"/>Contact</a>
            </Button>
            <Button className="group">
              <span>Launch App</span>
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5"/>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Meet <span className="bg-gradient-to-r from-indigo-400 to-emerald-300 bg-clip-text text-transparent">Rony’s AI Assistant</span>
            </motion.h1>
            <p className="mt-4 text-zinc-300 max-w-prose">
              Your fast, friendly copilot for everyday tasks—planning trips, drafting emails, learning topics, and automating workflows.
              Private by default. Powerful when you need it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="bg-zinc-800"><Zap className="h-3.5 w-3.5 mr-1"/>Fast responses</Badge>
              <Badge className="bg-zinc-800"><Shield className="h-3.5 w-3.5 mr-1"/>Privacy-first</Badge>
              <Badge className="bg-zinc-800"><Sparkles className="h-3.5 w-3.5 mr-1"/>Smart automations</Badge>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="h-12 px-6 text-base">Start free</Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base border-zinc-700" asChild>
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-zinc-400">No credit card required • Cancel anytime</p>
          </div>

          {/* Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="bg-zinc-900/60 border-zinc-800 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageSquare className="h-5 w-5"/> Live Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`${m.role === "user" ? "bg-indigo-600" : "bg-zinc-800"} rounded-2xl px-4 py-2 max-w-[85%] text-sm leading-relaxed shadow`}> {m.text}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Input
                    placeholder="Ask anything…"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <Button onClick={sendPrompt}>Send</Button>
                </div>
                <p className="mt-2 text-xs text-zinc-500">This is a local demo. The real assistant connects to tools for search, docs, and automation.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Sparkles className="h-5 w-5"/>,
              title: "Personalized intelligence",
              desc: "Understands your style and context to craft better answers over time.",
            },
            {
              icon: <Shield className="h-5 w-5"/>,
              title: "Private & secure",
              desc: "Your data stays yours. End‑to‑end controls and granular permissions.",
            },
            {
              icon: <Zap className="h-5 w-5"/>,
              title: "Tool-powered",
              desc: "Connect calendar, email, docs, and web to get real work done.",
            },
          ].map((f, i) => (
            <Card key={i} className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-2xl bg-zinc-800">{f.icon}</div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Ask",
              points: ["Type or speak your task", "Attach files or links"]
            },
            {
              step: "2",
              title: "Assist",
              points: ["Rony’s AI researches, drafts, automates", "Confirms before acting"]
            },
            {
              step: "3",
              title: "Achieve",
              points: ["Get clean results fast", "Refine with one‑tap prompts"]
            },
          ].map((s, i) => (
            <Card key={i} className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <Badge className="w-8 h-8 rounded-full grid place-items-center bg-indigo-600">{s.step}</Badge>
                <CardTitle className="mt-3">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300 space-y-2">
                {s.points.map((p, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5"/>
                    <span>{p}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Free", price: "₹0", cta: "Get started", features: ["50 messages/day", "Community support", "Basic tools"] },
            { name: "Pro", price: "₹499/mo", highlight: true, cta: "Upgrade to Pro", features: ["Unlimited chats", "Faster model access", "File & web tools", "Priority support"] },
            { name: "Team", price: "₹999/user/mo", cta: "Contact sales", features: ["Shared workspaces", "Admin controls", "SSO & audit logs"] },
          ].map((tier, i) => (
            <Card key={i} className={`border ${tier.highlight ? "border-indigo-500 shadow-indigo-500/20" : "border-zinc-800"} bg-zinc-900/50`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.highlight && <Badge className="bg-indigo-600">Most popular</Badge>}
                </div>
                <div className="mt-2 text-3xl font-semibold">{tier.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5"/> {f}</li>
                  ))}
                </ul>
                <Button className="w-full mt-4">{tier.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-4">
          {[
            {
              q: "Is my data used to train?",
              a: "No. By default, your content isn’t used to train shared models. You can opt in to share telemetry if you want to help us improve."
            },
            {
              q: "Do you have a mobile app?",
              a: "Yes—Rony’s AI is fully responsive and a PWA. Add it to your home screen for a native feel."
            },
            {
              q: "Which languages are supported?",
              a: "English, Hindi, Bengali to start—more coming soon."
            },
          ].map((item, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/40">
              <div className="font-medium">{item.q}</div>
              <p className="mt-2 text-sm text-zinc-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="bg-gradient-to-r from-indigo-600/20 to-emerald-500/20 border-indigo-700/40">
          <CardContent className="py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to try Rony’s AI Assistant?</h3>
              <p className="text-zinc-300 mt-1">Start free in seconds. Upgrade anytime.</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg">Create account</Button>
              <Button size="lg" variant="outline" className="border-zinc-700" asChild>
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>Star on GitHub</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Rony’s AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
