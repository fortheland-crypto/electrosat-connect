import shopImg from "@/assets/shop.jpg";

/**
 * Каталог магазина. ДЕМО-контент — заменяется на реальные товары.
 * Чтобы добавить категорию: допишите её в `categories`.
 * Чтобы добавить товар: добавьте объект в `products` с существующим categoryId.
 */

export type Category = { id: string; title: string };

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  /** null — цена уточняется */
  price: number | null;
  inStock: boolean;
  image: string;
  /** Демо-карточка: контент можно заменить */
  demo?: boolean;
};

export const categories: Category[] = [
  { id: "remotes", title: "Пульты дистанционного управления" },
  { id: "receivers", title: "Спутниковые ресиверы" },
  { id: "antennas", title: "Спутниковые антенны" },
  { id: "lnb", title: "Конвертеры" },
  { id: "cables", title: "Кабели" },
  { id: "connectors", title: "Разъёмы" },
  { id: "brackets", title: "Кронштейны" },
  { id: "tv-accessories", title: "ТВ-аксессуары" },
  { id: "electronics", title: "Электроника" },
  { id: "appliances", title: "Мелкая бытовая техника" },
  { id: "other", title: "Другие товары" },
];

export const products: Product[] = [
  {
    id: "p1",
    categoryId: "remotes",
    name: "Пульт для ТВ-приставки",
    description: "Демонстрационная карточка. Уточните модель по WhatsApp.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p2",
    categoryId: "remotes",
    name: "Универсальный пульт для телевизора",
    description: "Демонстрационная карточка. Наличие уточняется.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p3",
    categoryId: "receivers",
    name: "Спутниковый ресивер",
    description: "Демонстрационная карточка. Модели уточняйте в магазине.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p4",
    categoryId: "antennas",
    name: "Спутниковая антенна",
    description: "Демонстрационная карточка. Диаметр и комплект — по запросу.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p5",
    categoryId: "lnb",
    name: "Конвертер для спутниковой антенны",
    description: "Демонстрационная карточка. Тип уточняется.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p6",
    categoryId: "cables",
    name: "Коаксиальный кабель",
    description: "Демонстрационная карточка. Метраж по запросу.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p7",
    categoryId: "connectors",
    name: "Разъём F-типа",
    description: "Демонстрационная карточка. Наличие уточняется.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p8",
    categoryId: "brackets",
    name: "Кронштейн для антенны",
    description: "Демонстрационная карточка. Размеры уточняются.",
    price: null,
    inStock: false,
    image: shopImg,
    demo: true,
  },
  {
    id: "p9",
    categoryId: "tv-accessories",
    name: "ТВ-аксессуары",
    description: "Демонстрационная карточка. Ассортимент в магазине.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p10",
    categoryId: "electronics",
    name: "Электроника для дома",
    description: "Демонстрационная карточка. Уточните позицию по WhatsApp.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p11",
    categoryId: "appliances",
    name: "Мелкая бытовая техника",
    description: "Демонстрационная карточка. Ассортимент уточняется.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
  {
    id: "p12",
    categoryId: "other",
    name: "Другие товары",
    description: "Демонстрационная карточка. Спросите в магазине или в WhatsApp.",
    price: null,
    inStock: true,
    image: shopImg,
    demo: true,
  },
];

export function formatPrice(price: number | null) {
  return price === null
    ? "Цена по запросу"
    : new Intl.NumberFormat("ru-RU").format(price) + " ₸";
}
