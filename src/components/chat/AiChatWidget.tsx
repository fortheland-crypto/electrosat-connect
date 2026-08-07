import { useState, useRef, useEffect } from "react";
import { Bot, MessageCircle, Send, Sparkles, X, Loader2, Phone, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";
import { fetchGroqChat, cleanMarkdownSymbols, type ChatMessage } from "@/lib/groq";

const INITIAL_GREETING: ChatMessage = {
  role: "assistant",
  content: `Здравствуйте! Я ИИ-консультант ElectroSat.

Задайте мне любой вопрос: про пульты, операторов ТВ, продление подписок, видеонаблюдение, кабели, кронштейны или график работы в Сатпаеве!`,
};

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = updatedMessages.filter((m) => m !== INITIAL_GREETING);
      const reply = await fetchGroqChat(chatHistory.length > 0 ? chatHistory : [userMessage]);
      setMessages([...updatedMessages, { role: "assistant", content: cleanMarkdownSymbols(reply) }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Не удалось получить ответ. Напишите нам в WhatsApp по номеру +7 705 220 25 75",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([INITIAL_GREETING]);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Открыть ИИ-консультант"
        className="fixed bottom-20 left-4 z-50 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary p-3.5 text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:left-6 md:px-5 md:py-3.5"
      >
        <div className="relative flex items-center justify-center">
          <Bot className="size-6" />
          <Sparkles className="absolute -top-1 -right-1 size-3 text-signal animate-pulse" />
        </div>
        <span className="hidden font-display text-xs font-bold uppercase tracking-wider sm:inline-block">
          ИИ Консультант
        </span>
      </button>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-50 flex max-h-[85vh] h-[540px] w-auto max-w-sm flex-col overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <Bot className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">
                  ElectroSat ИИ Помощник
                </h3>
                <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <span className="size-2 rounded-full bg-whatsapp animate-pulse" />
                  Онлайн • Консультант
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="size-8 rounded-lg text-muted-foreground hover:text-foreground"
                title="Очистить диалог"
                onClick={handleClearChat}
              >
                <RotateCcw className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-[13.5px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 leading-relaxed tracking-normal font-sans ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground font-medium rounded-br-xs shadow-xs"
                      : "bg-slate-100 text-slate-900 border border-slate-200/80 rounded-bl-xs shadow-xs dark:bg-secondary/80 dark:text-foreground dark:border-border/60"
                  }`}
                >
                  {cleanMarkdownSymbols(m.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-secondary/50 px-4 py-2.5 text-xs text-muted-foreground">
                <Loader2 className="size-3.5 animate-spin text-primary" />
                <span>ИИ готовится ответить...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Direct Contact Footer */}
          <div className="flex items-center justify-between border-t border-border bg-muted/40 px-3 py-2 text-xs">
            <span className="text-muted-foreground">Связаться с мастером:</span>
            <div className="flex gap-2">
              <a
                href={site.phoneHref}
                className="flex items-center gap-1 font-semibold text-primary hover:underline"
              >
                <Phone className="size-3" /> Позвонить
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-whatsapp hover:underline"
              >
                <MessageCircle className="size-3" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-border bg-background p-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишите ваш вопрос..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-input bg-secondary/30 px-3.5 py-2 text-sm focus:border-primary focus:outline-none"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="size-9 shrink-0 rounded-xl"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
