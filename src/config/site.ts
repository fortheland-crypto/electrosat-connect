/**
 * Единый источник данных о компании.
 * Меняете телефон, адрес, WhatsApp или соцсети — только здесь.
 */

export const site = {
  name: "ElectroSat",
  tagline: "Спутниковое ТВ и видеонаблюдение",
  cities: ["Сатпаев", "Жезказган"],
  phoneDisplay: "+7 705 220 25 75",
  phoneHref: "tel:+77052202575",
  whatsappNumber: "77052202575",
  instagram: "@electro_sat_arman",
  instagramUrl: "https://instagram.com/electro_sat_arman",
  addressShort: "ТД «Арман», г. Сатпаев",
  addressFull:
    "г. Сатпаев, ТД «Арман», ул. Мангилик Ел 20А (бывшая Комарова 20А), цокольный этаж",
  workHours: "Пн: Выходной | Вт–Сб: 11:00–19:00 | Вс: 11:00–17:00",
  mapEmbed:
    "https://www.google.com/maps?q=%D0%A1%D0%B0%D1%82%D0%BF%D0%B0%D0%B5%D0%B2%20%D0%9C%D0%B0%D0%BD%D0%B3%D0%B8%D0%BB%D0%B8%D0%BA%20%D0%95%D0%BB%2020%D0%90&output=embed",
} as const;

export const defaultWhatsappMessage =
  "Здравствуйте! Я нашёл вас на сайте ElectroSat. Нужна консультация.";

/** Ссылка на WhatsApp с готовым текстом сообщения. */
export function waLink(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productWaLink(productName: string) {
  return waLink(
    `Здравствуйте! Интересует товар: ${productName}. Подскажите, пожалуйста, есть ли он в наличии?`,
  );
}

export const nav = [
  { label: "Главная", to: "/" },
  { label: "Спутниковое ТВ", to: "/satellite-tv" },
  { label: "Видеонаблюдение", to: "/cctv" },
  { label: "Магазин", to: "/shop" },
  { label: "Наши работы", to: "/works" },
  { label: "О компании", to: "/about" },
  { label: "Контакты", to: "/contacts" },
] as const;
