import shopImg from "@/assets/shop.jpg";
import cctvImg from "@/assets/cctv.jpg";
import satelliteImg from "@/assets/satellite.jpg";
import remoteImg from "@/assets/products/prod_remote.jpg";
import receiverImg from "@/assets/products/prod_receiver.jpg";
import antennaImg from "@/assets/products/prod_antenna.jpg";
import lnbImg from "@/assets/products/prod_lnb.jpg";
import cableImg from "@/assets/products/prod_cable.jpg";
import bracketImg from "@/assets/products/prod_bracket.svg";
import chargerImg from "@/assets/products/prod_charger.svg";
import flashImg from "@/assets/products/prod_flash.svg";
import applianceImg from "@/assets/products/prod_appliance.svg";

export type Category = { id: string; title: string };

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number | null;
  priceDisplay?: string;
  inStock: boolean;
  image: string;
  demo?: boolean;
};

export const categories: Category[] = [
  { id: "remotes", title: "Пульты ДУ (Samsung, LG, Artel...)" },
  { id: "receivers", title: "Спутниковые ресиверы & Головки" },
  { id: "antennas", title: "Спутниковые антенны" },
  { id: "lnb", title: "Конвертеры LNB" },
  { id: "cables", title: "Кабели и шнуры" },
  { id: "brackets", title: "Кронштейны (поворотные и настенные)" },
  { id: "cctv", title: "Видеонаблюдение" },
  { id: "appliances", title: "Зарядки, чайники, фены, утюги, флешки" },
  { id: "other", title: "Другие товары" },
];

export const products: Product[] = [
  {
    id: "p1",
    categoryId: "remotes",
    name: "Пульты для телевизоров (Samsung, LG, Artel, Yasin, ARG...)",
    description: "Огромный выбор пультов для ТВ брендов Samsung, LG, Artel, Yasin, ARG, Panasonic, Philips, TCL, Hisense и др.",
    price: 800,
    priceDisplay: "от 800 до 4 500 ₸",
    inStock: true,
    image: remoteImg,
  },
  {
    id: "p2",
    categoryId: "remotes",
    name: "Пульт для ТВ-приставки и цифрового тюнера",
    description: "Пульты для любых цифровых и спутниковых приставок, приставок OTAU TV, НТВ, Триколор, Alma TV.",
    price: 1500,
    priceDisplay: "от 800 до 4 500 ₸",
    inStock: true,
    image: remoteImg,
  },
  {
    id: "p3",
    categoryId: "receivers",
    name: "Цифровой спутниковый ресивер HD",
    description: "Работаем со всеми операторами: OTAU TV, Alma TV, НТВ-Плюс, Триколор, МТС, Телекарта.",
    price: 12000,
    priceDisplay: "от 12 000 ₸",
    inStock: true,
    image: receiverImg,
  },
  {
    id: "p5",
    categoryId: "lnb",
    name: "Спутниковая головка (конвертер LNB)",
    description: "Головки для спутникового оборудования (универсальные, линейные, круговые) на 1, 2 или 4 выхода.",
    price: 2500,
    priceDisplay: "от 2 500 ₸",
    inStock: true,
    image: lnbImg,
  },
  {
    id: "p4",
    categoryId: "antennas",
    name: "Спутниковая офсетная антенна (тарелка)",
    description: "Качественные антенны для приема OTAU TV, НТВ, Триколор, Телекарта. Выезд мастера на установку.",
    price: 12000,
    priceDisplay: "от 12 000 ₸",
    inStock: true,
    image: antennaImg,
  },
  {
    id: "p9",
    categoryId: "brackets",
    name: "Кронштейны настенные и поворотные для ТВ",
    description: "Настенные, поворотные и наклонно-поворотные кронштейны для телевизоров любой диагонали.",
    price: 2500,
    priceDisplay: "от 2 500 до 6 500 ₸",
    inStock: true,
    image: bracketImg,
  },
  {
    id: "p6",
    categoryId: "cables",
    name: "Телевизионный коаксиальный кабель RG6",
    description: "Качественный медный телевизионный кабель с экранированием. Продажа от 1 метра.",
    price: 150,
    priceDisplay: "150 ₸ / метр",
    inStock: true,
    image: cableImg,
  },
  {
    id: "p7",
    categoryId: "cctv",
    name: "Уличная & Внутренняя камера видеонаблюдения IP/Wi-Fi",
    description: "Камеры высокого разрешения, ночная подсветка, запись на карту памяти/облако, удаленный доступ с телефона.",
    price: 14000,
    priceDisplay: "от 14 000 ₸",
    inStock: true,
    image: cctvImg,
  },
  {
    id: "p8",
    categoryId: "cctv",
    name: "Видеорегистратор DVR / NVR",
    description: "Запись с камер видеонаблюдения, поддержка жестких дисков, вывод на монитор и смартфон.",
    price: 22000,
    priceDisplay: "от 22 000 ₸",
    inStock: true,
    image: cctvImg,
  },
  {
    id: "p11",
    categoryId: "appliances",
    name: "Зарядные устройства, шнуры (Type-C, Lightning, Micro-USB)",
    description: "Быстрые сетевые зарядные устройства и прочные кабели для телефонов и планшетов.",
    price: 1200,
    priceDisplay: "от 1 000 ₸",
    inStock: true,
    image: chargerImg,
  },
  {
    id: "p13",
    categoryId: "appliances",
    name: "USB-флешки и карты памяти (SD / MicroSD)",
    description: "USB 3.0 флеш-накопители и карты памяти для телевизоров, приставок, видеокамер и смартфонов.",
    price: 1800,
    priceDisplay: "от 1 500 ₸",
    inStock: true,
    image: flashImg,
  },
  {
    id: "p14",
    categoryId: "appliances",
    name: "Мелкая бытовая техника (чайники, утюги, фены)",
    description: "Электрочайники, утюги, фены для волос в наличии в магазине ElectroSat в ТД «Арман».",
    price: 3500,
    priceDisplay: "от 3 500 ₸",
    inStock: true,
    image: applianceImg,
  },
];

export function formatPrice(productOrPrice: Product | number | null) {
  if (typeof productOrPrice === "object" && productOrPrice !== null) {
    if (productOrPrice.priceDisplay) return productOrPrice.priceDisplay;
    return productOrPrice.price === null
      ? "Цена по запросу"
      : new Intl.NumberFormat("ru-RU").format(productOrPrice.price) + " ₸";
  }
  return productOrPrice === null
    ? "Цена по запросу"
    : new Intl.NumberFormat("ru-RU").format(productOrPrice) + " ₸";
}
