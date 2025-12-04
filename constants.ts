import { CaseStudy, FAQ, Service } from "./types";

// CONTACT INFO
export const PHONE_DISPLAY = "+7 (903) 305-23-19";
export const PHONE_LINK = "79033052319";
export const TELEGRAM_USERNAME = "dmitryi_maximov";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_LINK}`;
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

// NEW LINKS
export const ASTROBOT_LINK = "https://t.me/your_astro_bot"; // Замените на реальную ссылку бота
export const CHANNEL_LINK = "https://t.me/your_channel"; // Замените на реальную ссылку канала

// IMAGES
// IMPORTANT: Place 'photo.jpg' and 'logo.png' in the public folder.
export const HERO_IMAGE_URL = "/photo.jpg"; 
// Fallback image if the user hasn't uploaded their photo yet
export const HERO_FALLBACK_URL = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export const LOGO_URL = "/logo.png";
export const LOGO_TEXT = "HR MAXIMOV"; 

// NAVIGATION
export const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "АстроБот", href: "#astro" }, // Added Astro link
  { label: "Блог", href: "#blog" },      // Added Blog/Channel link
  { label: "FAQ", href: "#faq" },
];

// DATA
export const SERVICES: Service[] = [
  {
    title: "Точечный подбор (Headhunting)",
    description: "Поиск сложных специалистов и ТОП-менеджеров. Нахожу тех, кто не ищет работу, но идеально подходит под ваши задачи.",
    features: ["Глубинное интервью", "Проверка рекомендаций", "Оценка рисков"]
  },
  {
    title: "Построение HR-системы",
    description: "Превращаю хаос в систему. Разработка регламентов, системы адаптации (онбординг) и мотивации для команд от 10 человек.",
    features: ["Системный онбординг", "Прозрачные KPI", "Регламенты"]
  },
  {
    title: "HR-Аудит и Диагностика",
    description: "Честный разбор вашей текущей команды. Кто тянет бизнес вниз? Кто перегорел? Кого пора повышать?",
    features: ["Диагностика команды", "План развития", "Кадровые решения"]
  }
];

export const CASES: CaseStudy[] = [
  {
    title: "Строительная компания (Штат 15 чел.)",
    role: "Руководитель отдела продаж (РОП)",
    problem: "Собственник сам управлял продавцами. Нет времени на стратегию, продажи хаотичные. Кандидаты «сливались» через месяц.",
    solution: "Понял, что собственник — авторитарен. Нашел кандидата с жестким стержнем и опытом в B2B, который умеет держать удар.",
    result: "РОП работает 1,5 года. Выручка выросла на 40%. Собственник вышел из операционного управления продажами."
  },
  {
    title: "Онлайн-школа (Штат 8 чел.)",
    role: "Бизнес-ассистент собственника",
    problem: "Полный хаос в расписании и документах. Нужен человек-доверие, «вторая голова», а не просто секретарь.",
    solution: "Провел глубокий психологический скрининг на честность и эмпатию (Soft Skills). Отсеял 50+ резюме.",
    result: "Ассистент полностью разгрузил собственника от рутины за 2 недели. Работают душа в душу."
  },
  {
    title: "Диджитал-агентство (Штат 25 чел.)",
    role: "Аккаунт-менеджер (Client Service)",
    problem: "Клиенты уходили из-за плохого сервиса. Нужен человек с высокой эмпатией, а не просто «перекладыватель бумажек».",
    solution: "Нашел специалиста из смежной сферы (гостиничный бизнес), где сервис — это религия.",
    result: "LTV (жизнь клиента) увеличилась, жалобы прекратились."
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Как быстро вы найдете человека?",
    answer: "В малом бизнесе скорость критична. Первые резюме вы получите через 3-5 дней после брифа. Средний срок закрытия вакансии — 2-3 недели."
  },
  {
    question: "Вы работаете по договору?",
    answer: "Обязательно. Я работаю официально (ИП). В договоре прописаны гарантии замены кандидата и условия конфиденциальности."
  },
  {
    question: "Почему не работные сайты?",
    answer: "Работными сайтами пользуются все. Но лучшие кандидаты часто не ищут работу активно. Я использую свои каналы, базу и навыки прямого поиска, чтобы достать тех, кого нет на hh."
  }
];