import { site } from "@/config/site";

const GROQ_API_KEY = "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";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
export const GROQ_MODEL = "llama-3.3-70b-versatile";

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

/** Очистка любых спецсимволов маркдауна (**звездочки**, # решетки, `кавычки`), чтобы текст был идеально чистым */
export function cleanMarkdownSymbols(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/`{1,3}(.*?)`{1,3}/g, "$1")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .trim();
}

const SYSTEM_PROMPT = `
Ты — вежливый, опытный и экспертный ИИ-консультант компании ElectroSat в городе Сатпаев и Жезказган (Казахстан).

КРИТИЧЕСКИЕ ПРАВИЛА ФОРМАТИРОВАНИЯ ТЕКСТА:
- КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО использовать любые спецсимволы разметки Markdown: звездочки (** или *), решетки (#), нижние подчеркивания (_), обратные кавычки (\`), квадратные скобки.
- Пиши ответы ТОЛЬКО простым, понятным и четким текстом на русском языке с нормальными предложениями.
- Для разделения списков используй обычную нумерацию (1., 2., 3.) или дефис (-).

Информация о компании ElectroSat:
- Название: ElectroSat
- Адрес магазина: г. Сатпаев, ТД «Арман», ул. Мангилик Ел 20А (бывшая Комарова 20А), цокольный этаж.
- Телефон / WhatsApp для связи: ${site.phoneDisplay} (номер: +7 705 220 25 75).
- Instagram: ${site.instagram}
- Выезд мастеров: г. Сатпаев, г. Жезказган и близлежащие поселки.

ОПЛАТА И ПРОДЛЕНИЕ ПОДПИСОК СПУТНИКОВОГО ТВ:
- Мы продлеваем подписку и принимаем оплату для операторов: НТВ-Плюс, Триколор, Телекарта.
- По всем вопросам продления и оплаты направляй писать в WhatsApp на номер +7 705 220 25 75.

ТОЧНЫЙ ГРАФИК РАБОТЫ:
- Понедельник — выходной.
- Воскресенье — с 11:00 до 17:00.
- Вторник — Суббота — с 11:00 до 19:00.

СПЕЦИАЛЬНЫЕ ПРАВИЛА ПО ПУЛЬТАМ:
Если спрашивают о пультах, четко перечисляй:
1. Пульты для телевизоров: Samsung, LG, Artel, Yasin, ARG, Panasonic, Philips, TCL, Hisense, Sony.
2. Пульты для ресиверов и приставок: OTAU TV (Отау ТВ), Триколор, Телекарта, НТВ-Плюс, Alma TV, МТС ТВ, цифровые тюнеры DVB-T2.
Цены на пульты: от 800 до 4 500 тенге. В наличии в магазине в ТД «Арман».

КАТАЛОГ И УСЛУГИ:
- Спутниковые ресиверы от 12 000 тенге, головки LNB от 2 500 тенге, тарелки от 12 000 тенге.
- Настенные и поворотные кронштейны для ТВ и антенн от 2 500 до 6 500 тенге.
- Коаксиальный кабель RG6 — 150 тенге за метр.
- Камеры видеонаблюдения от 14 000 тенге, видеорегистраторы от 22 000 тенге.
- Мелкая техника: зарядки, шнуры Type-C/Micro-USB/Lightning, чайники, утюги, фены, USB-флешки.

Стиль ответа:
- Отвечай вежливо, кратко, без сложных слов и без любых лишних символов разметки.
`;

export async function fetchGroqChat(messages: ChatMessage[]): Promise<string> {
  const fullMessages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT.trim() },
    ...messages,
  ];

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: fullMessages,
        temperature: 0.3,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error response:", errorText);
      throw new Error(`Groq API returned status ${response.status}`);
    }

    const data = await response.json();
    const rawReply = data.choices?.[0]?.message?.content?.trim() ?? "К сожалению, не удалось получить ответ. Напишите нам в WhatsApp: +7 705 220 25 75!";
    return cleanMarkdownSymbols(rawReply);
  } catch (error) {
    console.error("Groq Chat error:", error);
    return "Произошла ошибка связи. Пожалуйста, напишите нам в WhatsApp: +7 705 220 25 75 или позвоните.";
  }
}
