import type { Language } from "@/shared/i18n/config"

type Localized<T> = Record<Language, T>

export type ExperienceItem = {
	company: string
	role: string
	period: string
	location: string
	description: string
	points: string[]
	sections: {
		title: string
		points: string[]
	}[]
	stack: string[]
}

export type ProjectCase = {
	title: string
	type: string
	description: string
	responsibilities: string[]
	challenges: string[]
	improvements: string[]
	stack: string[]
	githubUrl?: string
}

export const profile = {
	name: "Roman Lipka",
	email: "limpch2612@gmail.com",
	location: {
		ru: "Россия",
		en: "Russia",
	},
	age: {
		ru: "22 года",
		en: "22 y.o.",
	},
	role: {
		ru: "Фронтенд-разработчик на TypeScript",
		en: "Frontend TypeScript Developer",
	},
	homeTitle: {
		ru: "Липка Роман",
		en: "Roman Lipka",
	},
	readAbout: {
		ru: "Читать обо мне",
		en: "Read about me",
	},
} as const

export const about = {
	ru: {
		title: "Обо мне",
		summary:
			"Фронтенд-разработчик с 4+ годами коммерческого опыта в разработке SPA-приложений и внутренних B2B/B2C-систем на React, Angular и TypeScript. Работал в продуктовых компаниях и агентской среде, часто параллельно на нескольких проектах. На ряде проектов был единственным фронтенд-разработчиком и отвечал за архитектуру фронтенда, интеграцию с бэкендом, реализацию UI/UX, стабильность после релизов и продуктовые технические решения. Сейчас ищу удаленную позицию в продуктовой команде, где смогу участвовать в разработке фронтенда, росте продукта, архитектуре и технической стратегии.",
		contactsTitle: "Контакты",
		educationTitle: "Образование",
		education:
			"КИПО | Среднее профессиональное образование, программист в компьютерных системах | Сентябрь 2019",
		languagesTitle: "Языки",
		languages: "Русский - родной / билингвальный; Английский - профессиональный рабочий уровень",
	},
	en: {
		title: "About me",
		summary:
			"Frontend Developer with 4+ years of commercial experience building SPA applications and internal B2B/B2C systems using React/Angular and TypeScript. Experienced in both product companies and agency environments, often working across multiple projects simultaneously. Frequently served as the sole Frontend Developer, taking ownership of frontend architecture, frontend-backend integration, UI/UX implementation, and post-release product stability. Currently seeking a remote position within a product-focused team where I can contribute to frontend development, product growth, architecture decisions, and technical strategy.",
		contactsTitle: "Contacts",
		educationTitle: "Education",
		education:
			"KIPO | Secondary vocational education, Programmer in computer systems | September 2019",
		languagesTitle: "Languages",
		languages: "Russian - Native / Bilingual; English - Professional Working",
	},
} satisfies Localized<{
	title: string
	summary: string
	contactsTitle: string
	educationTitle: string
	education: string
	languagesTitle: string
	languages: string
}>

export const skillGroups = {
	ru: [
		{
			title: "Frontend",
			items: [
				"React/Angular",
				"TypeScript",
				"Next.js",
				"Redux Toolkit",
				"Zustand",
				"RTK Query",
				"React Router",
			],
		},
		{
			title: "Реальное время и API",
			items: ["WebSocket", "REST API", "GraphQL", "Apollo Client"],
		},
		{
			title: "Бэкенд и инструменты",
			items: ["Node.js", "Express", "NestJS", "Docker", "Vite", "Webpack"],
		},
		{
			title: "Тестирование и качество",
			items: ["Jest", "React Testing Library", "Sentry"],
		},
		{
			title: "Интерфейсы и стилизация",
			items: ["SCSS", "SCSS Modules", "Figma", "адаптивные интерфейсы", "сложные формы и таблицы"],
		},
	],
	en: [
		{
			title: "Frontend",
			items: [
				"React/Angular",
				"TypeScript",
				"Next.js",
				"Redux Toolkit",
				"Zustand",
				"RTK Query",
				"React Router",
			],
		},
		{
			title: "Realtime & API",
			items: ["WebSocket", "REST API", "GraphQL", "Apollo Client"],
		},
		{
			title: "Backend & Tooling",
			items: ["Node.js", "Express", "NestJS", "Docker", "Vite", "Webpack"],
		},
		{
			title: "Testing & Quality",
			items: ["Jest", "React Testing Library", "Sentry"],
		},
		{
			title: "UI & Styling",
			items: ["SCSS", "SCSS Modules", "Figma", "responsive UI", "complex forms and tables"],
		},
	],
} satisfies Localized<{ title: string; items: string[] }[]>

export const experience = {
	ru: [
		{
			company: "Moneyport",
			role: "Senior Frontend Developer",
			period: "Май 2025 - Июнь 2026",
			location: "Краснодар, Россия",
			description:
				"Продуктовая компания, разрабатывающая внутренние CRM-решения и клиентские платформы. Работал над CRM и клиентской платформой: функциональность в реальном времени, внутренние коммуникации, PWA, стабильность фронтенда и улучшение UX.",
			points: [
				"Разрабатывал и поддерживал CRM и функции клиентской платформы на React и TypeScript.",
				"Реализовал функциональность в реальном времени на WebSocket: live-обновления, смену статусов и пользовательские уведомления.",
				"Разрабатывал внутренний чат и сценарии уведомлений для бизнес-процессов.",
				"Собрал PWA-функции: офлайн-режим, push-уведомления и установку приложения на устройства пользователей.",
				"Рефакторил устаревший фронтенд-код, улучшая поддерживаемость, читаемость и стабильность приложения.",
				"Улучшал существующие UI-компоненты, формы, пользовательские сценарии и внутренние инструменты.",
				"Интегрировал фронтенд-функции с бэкенд-сервисами и GraphQL API.",
				"Управлял состоянием приложения через Redux Toolkit.",
				"Работал с бэкенд-разработчиками и дизайнерами, чтобы согласовать реализацию с требованиями продукта.",
				"Поддерживал выпущенные функции и исправлял production-проблемы.",
			],
			sections: [
				{
					title: "Функциональность в реальном времени",
					points: [
						"Внедрил live-обновления данных на WebSocket и работал над логикой чата, состояниями сообщений, уведомлениями и сценариями взаимодействия пользователей.",
						"Повысил стабильность обмена данными в реальном времени между фронтендом и бэкендом.",
					],
				},
				{
					title: "Разработка PWA",
					points: [
						"Разработал PWA-функции для клиентской платформы: отдельные сценарии офлайн-режима, push-уведомления и установку приложения на устройство.",
					],
				},
				{
					title: "Рефакторинг устаревшего кода",
					points: [
						"Рефакторил фронтенд-модули и компоненты, улучшал структуру кода и стабилизировал критичные пользовательские сценарии после релизов.",
					],
				},
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"WebSocket",
				"PWA",
				"SCSS",
				"GraphQL",
				"Apollo Client",
			],
		},
		{
			company: "ConvertMe",
			role: "Middle Fullstack Developer",
			period: "Январь 2022 - Апрель 2025",
			location: "Краснодар, Россия",
			description:
				"IT-компания, разрабатывающая внутренние B2B- и B2C-продукты. Участвовал в разработке CRM-систем, административных панелей, Telegram Web Apps и клиентских SPA-приложений. На нескольких проектах был единственным фронтенд-разработчиком и отвечал за архитектуру фронтенда, интеграцию, продуктовые технические решения и стабильность после релизов.",
			points: [
				"Разрабатывал SPA-приложения на React и TypeScript.",
				"Создавал B2B-админки и CRM-системы для внутренних бизнес-процессов.",
				"Делал сложные UI-компоненты, динамические формы, таблицы, фильтры, пагинацию и аналитические интерфейсы.",
				"Интегрировал REST API и функциональность в реальном времени.",
				"Проектировал и поддерживал архитектуру состояния приложения на Redux Toolkit и Zustand.",
				"Рефакторил устаревший код и улучшал стабильность приложения.",
				"Оптимизировал производительность фронтенда и сокращал лишние клиент-серверные запросы.",
				"Участвовал в code review и работал с бэкенд-разработчиками и дизайнерами.",
				"Поддерживал выпущенные функции и исправлял production-проблемы.",
			],
			sections: [
				{
					title: "Оптимизация производительности SPA",
					points: [
						"Улучшил скорость загрузки основной ленты приложения.",
						"Внедрил lazy loading, динамические импорты, виртуализированные списки на react-window и кеширование запросов через RTK Query.",
						"Снизил нагрузку на бэкенд за счет сокращения повторных запросов.",
					],
				},
				{
					title: "Автоматизация внутренней отчетности",
					points: [
						"Реализовал автоматизированный экспорт отчетов с генерацией Excel-файлов, интеграцией с Google Sheets API и Telegram-уведомлениями.",
						"Помог сократить ручную работу менеджеров и ускорить ежедневную отчетность.",
					],
				},
				{
					title: "Поддержка релизов и production",
					points: [
						"Участвовал в срочных исправлениях production-проблем до и после релизов.",
						"Настроил мониторинг ошибок через Sentry и fallback-механизмы для критичных пользовательских функций.",
					],
				},
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"RTK Query",
				"Zustand",
				"Next.js",
				"SCSS Modules",
				"React Router",
				"Node.js",
				"Express",
				"NestJS",
				"Docker",
				"Jest",
				"React Testing Library",
				"WebSocket",
				"Sentry",
			],
		},
	],
	en: [
		{
			company: "Moneyport",
			role: "Senior Frontend Developer",
			period: "May 2025 - June 2026",
			location: "Krasnodar, Russia",
			description:
				"Product company developing internal CRM solutions and client-facing platforms. Worked on the company CRM system and client platform, focusing on real-time functionality, internal communication tools, PWA features, frontend stability, and UX improvements.",
			points: [
				"Developed and maintained CRM and client-facing platform features using React and TypeScript.",
				"Implemented real-time functionality with WebSocket, including live updates, status changes, and user notifications.",
				"Developed an internal chat system and notification flows for business processes.",
				"Built PWA functionality, including offline mode, push notifications, and installation support for user devices.",
				"Refactored legacy frontend code to improve maintainability, readability, and application stability.",
				"Improved existing UI components, forms, user flows, and internal tools.",
				"Integrated frontend features with backend services and GraphQL API.",
				"Managed application state using Redux Toolkit.",
				"Worked closely with backend developers and designers to align technical implementation with product requirements.",
				"Supported released features and fixed production issues.",
			],
			sections: [
				{
					title: "Real-time functionality",
					points: [
						"Implemented WebSocket-based live data updates and worked on chat logic, message states, notifications, and user interaction flows.",
						"Improved the stability of real-time communication between frontend and backend.",
					],
				},
				{
					title: "PWA development",
					points: [
						"Developed PWA features for the client platform, including selected offline-mode scenarios, push notifications, and device installation flow.",
					],
				},
				{
					title: "Legacy code refactoring",
					points: [
						"Refactored existing frontend modules and components, improved code structure, and helped stabilize critical user flows after releases.",
					],
				},
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"WebSocket",
				"PWA",
				"SCSS",
				"GraphQL",
				"Apollo Client",
			],
		},
		{
			company: "ConvertMe",
			role: "Middle Fullstack Developer",
			period: "January 2022 - April 2025",
			location: "Krasnodar, Russia",
			description:
				"IT company developing internal B2B and B2C products. Participated in the development of CRM systems, admin panels, Telegram Web Apps, and client-facing SPA applications. On several projects, worked as the sole Frontend Developer, taking ownership of frontend architecture, frontend-backend integration, product-related technical decisions, and post-release application stability.",
			points: [
				"Developed SPA applications using React and TypeScript.",
				"Built B2B admin panels and CRM systems for internal business processes.",
				"Created complex UI components, dynamic forms, tables, filters, pagination, and analytics interfaces.",
				"Integrated REST API and real-time functionality.",
				"Designed and maintained application state architecture using Redux Toolkit and Zustand.",
				"Refactored legacy code and improved application stability.",
				"Optimized frontend performance and reduced unnecessary client-server requests.",
				"Participated in code reviews and worked closely with backend developers and designers.",
				"Supported released features and fixed production issues.",
			],
			sections: [
				{
					title: "SPA performance optimization",
					points: [
						"Improved the loading speed of the main application feed.",
						"Implemented lazy loading, dynamic imports, virtualized lists with react-window, and request caching with RTK Query.",
						"Reduced backend load by minimizing repeated requests.",
					],
				},
				{
					title: "Internal reporting automation",
					points: [
						"Implemented an automated report export system with Excel file generation, Google Sheets API integration, and Telegram notifications.",
						"Helped reduce manual work for managers and speed up daily reporting processes.",
					],
				},
				{
					title: "Release and production support",
					points: [
						"Participated in urgent fixes for production issues before and after releases.",
						"Configured error monitoring with Sentry and implemented fallback mechanisms for critical user-facing functionality.",
					],
				},
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"RTK Query",
				"Zustand",
				"Next.js",
				"SCSS Modules",
				"React Router",
				"Node.js",
				"Express",
				"NestJS",
				"Docker",
				"Jest",
				"React Testing Library",
				"WebSocket",
				"Sentry",
			],
		},
	],
} satisfies Localized<ExperienceItem[]>

export const projectCases = {
	ru: [
		{
			title: "Translead",
			type: "Fullstack-проект",
			description:
				"Сервис автоматического распределения лидов между клиентами по тегам, лимитам и правилам маршрутизации. Работал как единственный fullstack-разработчик; большинство архитектурных и продуктовых решений принимал самостоятельно из-за неполных исходных требований.",
			responsibilities: [
				"Разработал фронтенд- и бэкенд-части системы.",
				"Реализовал логику маршрутизации лидов на основе тегов, источников, клиентов и бизнес-правил.",
				"Построил функциональность управления клиентами, источниками и тегами.",
				"Реализовал лимиты лидов, очереди клиентов и логику распределения.",
				"Добавил защиту бэкенда от спама и внешних неавторизованных запросов.",
				"Интегрировал Telegram и email-уведомления.",
			],
			challenges: [
				"Проектирование основной логики распределения лидов.",
				"Создание гибкой системы лимитов и очередей.",
				"Работа с высоким уровнем неопределенности в продуктовых требованиях.",
			],
			improvements: [
				"Самостоятельно спроектировал базовую архитектуру сервиса.",
				"Реализовал API-ключи и защиту запросов к бэкенду.",
				"Ускорил выпуск MVP за счет Mantine UI для быстрой и единообразной разработки интерфейса.",
			],
			stack: [
				"React",
				"TypeScript",
				"Mantine",
				"React Router",
				"Zustand",
				"Axios",
				"Express",
				"Node.js",
				"node-telegram-bot-api",
				"Nodemailer",
				"Sequelize",
				"PostgreSQL",
				"Google APIs / Sheets",
			],
		},
		{
			title: "PlaytestRadar",
			type: "Frontend-проект",
			description:
				"Приложение на Angular 19 для организации игровых плейтестов, сбора обратной связи, публикации дневников разработки и управления дорожной картой функций. Проект включает публичный интерфейс для игроков и тестировщиков, а также административный раздел для просмотра отчетов и обновления статусов дорожной карты.",
			responsibilities: [
				"Разработал публичные страницы: обзор, карточку игры, дневники разработки, дорожную карту и форму обратной связи.",
				"Реализовал административную зону с auth guard: дашборд, список отчетов, страницу отчета и управление дорожной картой.",
				"Настроил клиентскую маршрутизацию и конфигурацию, подготовленную к SSR, через @angular/ssr.",
				"Построил сервисы данных и общие доменные модели для игры, дневников разработки, отчетов обратной связи и дорожной карты.",
				"Реализовал клиентское хранение отчетов обратной связи через localStorage в браузере.",
				"Поддержал структуру, удобную для unit-тестирования через Karma и Jasmine.",
			],
			challenges: [
				"Проектирование понятных сценариев для игроков, тестировщиков и администраторов в одном приложении.",
				"Простое хранение состояния и обратной связи без бэкенда.",
				"Подготовка SSR-совместимой конфигурации Angular.",
			],
			improvements: [
				"Структурировал приложение вокруг страниц, базовых сервисов, общего макета и моделей.",
				"Собрал сценарии дорожной карты и обратной связи, которые можно расширить интеграцией с бэкендом.",
				"Сохранил гибкую конфигурацию времени выполнения за счет Express-настройки, подготовленной к SSR.",
			],
			stack: [
				"Angular 19",
				"TypeScript",
				"Angular Router",
				"Angular Signals",
				"SCSS",
				"Express",
				"@angular/ssr",
				"localStorage",
				"Karma",
				"Jasmine",
			],
			githubUrl: "https://github.com/limpch/playtest-radar",
		},
		{
			title: "Roman Lipka Portfolio",
			type: "Frontend-проект",
			description:
				"Персональный сайт-портфолио на Next.js, React, TypeScript и SCSS Modules. Проект построен на FSD-inspired структуре, содержит локализованный контент, переключение языка и темы, SSR-рендеринг и cookie-based настройки пользователя.",
			responsibilities: [
				"Разработал страницы портфолио: главную, обо мне, опыт, стек и список кейсов.",
				"Организовал данные профиля, опыта, навыков и проектов через типизированную модель контента.",
				"Реализовал переключение языка и темы с сохранением пользовательских настроек.",
				"Настроил SSR-рендеринг локализованного контента и cookie-based preferences.",
				"Собрал FSD-inspired структуру с отдельными слоями shared, features, widgets, entities и views.",
			],
			challenges: [
				"Поддержка двух языков без дублирования UI-логики.",
				"Согласование SSR-состояния с клиентскими настройками языка и темы.",
				"Сохранение простой структуры данных для быстрого обновления портфолио.",
			],
			improvements: [
				"Сделал портфолио расширяемым: новые кейсы добавляются через модель данных.",
				"Разделил приложение на понятные слои и переиспользуемые UI-блоки.",
				"Добавил стабильную основу для дальнейшего развития сайта и публичной презентации опыта.",
			],
			stack: [
				"Next.js",
				"React",
				"TypeScript",
				"SCSS Modules",
				"SSR",
				"Cookies",
				"FSD-inspired architecture",
				"ESLint",
			],
			githubUrl: "https://github.com/limpch/Roman-Lipka",
		},
		{
			title: "Moneyport.ru",
			type: "Fullstack-проект",
			description:
				"Сервис международных денежных переводов с CRM-системой и клиентским интерфейсом. Работал над фронтендом основной страницы и внутренней CRM, фокусируясь на коммуникации в реальном времени, PWA-функциях и стабильности приложения.",
			responsibilities: [
				"Разрабатывал и поддерживал фронтенд-часть платформы.",
				"Создал чат в реальном времени на WebSocket.",
				"Разработал PWA-функции для клиентской платформы.",
				"Подключил браузерные push-уведомления.",
				"Улучшал UX, стабильность фронтенда и критичные пользовательские сценарии.",
			],
			challenges: [
				"Реализация стабильной функциональности в реальном времени.",
				"Поддержка PWA-поведения в разных пользовательских сценариях.",
				"Работа с GraphQL и сложным состоянием приложения.",
			],
			improvements: [
				"Реализовал PWA-функции с офлайн-возможностями.",
				"Подключил браузерные push-уведомления.",
				"Участвовал в рефакторинге фронтенд-логики и повышении стабильности приложения.",
			],
			stack: ["React", "TypeScript", "MobX", "GraphQL", "Apollo Client", "Motion", "SCSS Modules"],
		},
		{
			title: "Capsaty.ru",
			type: "Fullstack-проект",
			description:
				"Платформа для создания динамических форм, сбора заявок и отправки данных в email и Telegram. Разрабатывал фронтенд и бэкенд, продолжал поддержку и улучшение платформы после релиза.",
			responsibilities: [
				"Разработал конструктор динамических форм.",
				"Реализовал типизацию и обработку динамических полей формы.",
				"Построил обработку заявок и логику хранения данных.",
				"Разработал аналитику по заявкам, формам, датам и пользователям.",
				"Интегрировал Telegram-ботов и email-уведомления.",
				"Реализовал экспорт данных в Excel.",
			],
			challenges: [
				"Поддержка универсальной типизации для динамических полей.",
				"Построение аналитики по датам, формам и пользователям.",
				"Поддержка расширяемой архитектуры конструктора форм.",
			],
			improvements: [
				"Улучшил структуру работы с динамическими типами полей.",
				"Повысил стабильность и поддерживаемость бэкенда.",
				"Участвовал в проектировании новых функций платформы.",
			],
			stack: [
				"React",
				"TypeScript",
				"SCSS Modules",
				"React Router",
				"Redux Toolkit",
				"Axios",
				"Motion",
				"Jest",
				"React Testing Library",
				"Express",
				"Multer",
				"MySQL",
				"node-telegram-bot-api",
				"Nodemailer",
				"xlsx",
			],
		},
		{
			title: "Avtostories.ru",
			type: "Frontend-проект / бэкенд-микросервис",
			description:
				"Telegram Web App для генерации сторис и рекламных изображений для автомобильных и строительных компаний. Работал как единственный фронтенд-разработчик, участвовал в UX- и продуктовых решениях, а также разработал микросервис на Express для генерации изображений.",
			responsibilities: [
				"Разработал SPA-интерфейс для Telegram Web App.",
				"Интегрировал Telegram Web App API.",
				"Создал интерфейсы для генерации сторис по шаблонам.",
				"Работал с анимациями, UX и mobile-first-адаптацией интерфейса.",
				"Разработал бэкенд-микросервис для генерации изображений.",
				"Участвовал в разработке лендинга и интерфейсов админ-панели.",
			],
			challenges: [
				"Работа в рамках ограничений Telegram Web App.",
				"Генерация изображений на стороне бэкенда.",
				"Поддержка простого и быстрого UX для создания контента.",
			],
			improvements: [
				"Участвовал в проектировании пользовательских сценариев для быстрой генерации контента.",
				"Оптимизировал процесс генерации изображений.",
				"Координировал задачи по обновлению дизайна и улучшал удобство интерфейса.",
			],
			stack: [
				"React",
				"TypeScript",
				"SCSS Modules",
				"React Router",
				"Zustand",
				"Axios",
				"Motion",
				"Mantine",
				"Express",
				"Nodemon",
				"Next.js",
			],
		},
		{
			title: "Yrasa.ru",
			type: "Frontend-проект",
			description:
				"CRM-система для управления объявлениями о недвижимости и автоматизации работы с фидами Avito. Работал как единственный фронтенд-разработчик: проектировал SPA-архитектуру, реализовывал сложную бизнес-логику и участвовал в продуктовых решениях.",
			responsibilities: [
				"Разработал интерфейсы для управления объявлениями о недвижимости.",
				"Реализовал сложную систему фильтрации с множеством параметров.",
				"Построил функциональность массового редактирования объявлений.",
				"Реализовал историю изменений с возможностью просмотра и отката действий.",
				"Создал сценарии создания и редактирования объявлений внутри CRM.",
				"Реализовал ролевой доступ и управление правами.",
				"Работал с большими наборами данных, таблицами и бизнес-специфичными потоками данных.",
			],
			challenges: [
				"Поддержка производительности при работе с большими списками и таблицами.",
				"Реализация сложной фильтрации и логики массовых операций.",
				"Сохранение стабильности SPA при частых изменениях бизнес-логики.",
			],
			improvements: [
				"Оптимизировал рендеринг списков и таблиц.",
				"Улучшил структуру состояния приложения на Redux Toolkit.",
				"Участвовал в стабилизации и рефакторинге фронтенд-архитектуры.",
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"React Router",
				"SCSS Modules",
				"Axios",
				"Jest",
				"React Testing Library",
			],
		},
	],
	en: [
		{
			title: "Translead",
			type: "Fullstack Project",
			description:
				"A service for automatic lead distribution between clients based on tags, limits, and routing rules. Worked as the sole Fullstack Developer on the project. Most architectural and product decisions were made independently due to incomplete initial requirements.",
			responsibilities: [
				"Developed both frontend and backend parts of the system.",
				"Implemented lead routing logic based on tags, sources, clients, and business rules.",
				"Built client, source, and tag management functionality.",
				"Implemented lead limits, client queues, and distribution logic.",
				"Added backend protection against spam and external unauthorized requests.",
				"Integrated Telegram and email notifications.",
			],
			challenges: [
				"Designing the core lead distribution logic.",
				"Building a flexible limits and queue system.",
				"Working with a high level of uncertainty in product requirements.",
			],
			improvements: [
				"Designed the core service architecture independently.",
				"Implemented API keys and backend request protection.",
				"Accelerated MVP delivery by using Mantine UI for fast and consistent interface development.",
			],
			stack: [
				"React",
				"TypeScript",
				"Mantine",
				"React Router",
				"Zustand",
				"Axios",
				"Express",
				"Node.js",
				"node-telegram-bot-api",
				"Nodemailer",
				"Sequelize",
				"PostgreSQL",
				"Google APIs / Sheets",
			],
		},
		{
			title: "PlaytestRadar",
			type: "Frontend Project",
			description:
				"An Angular 19 application for organizing game playtests, collecting feedback, publishing devlogs, and managing a feature roadmap. The project includes a public-facing UI for players and testers plus an admin section for reviewing reports and updating roadmap statuses.",
			responsibilities: [
				"Developed public pages for the overview, game details, devlogs, roadmap, and feedback form.",
				"Implemented an admin area protected by an auth guard: dashboard, feedback reports list, report detail view, and roadmap management page.",
				"Configured client-side routing and an SSR-ready setup with @angular/ssr.",
				"Built data services and shared domain models for game data, devlogs, feedback reports, and roadmap items.",
				"Implemented client-side persistence for feedback reports using browser localStorage.",
				"Maintained a unit-testable Angular structure with Karma and Jasmine.",
			],
			challenges: [
				"Designing clear player/tester and admin flows in one application.",
				"Keeping feedback state and persistence simple without a backend.",
				"Preparing SSR-compatible Angular configuration.",
			],
			improvements: [
				"Structured the application around pages, core services, shared layout, and models.",
				"Built roadmap and feedback workflows that can be extended with backend integration later.",
				"Kept the runtime setup flexible through SSR-ready Express configuration.",
			],
			stack: [
				"Angular 19",
				"TypeScript",
				"Angular Router",
				"Angular Signals",
				"SCSS",
				"Express",
				"@angular/ssr",
				"localStorage",
				"Karma",
				"Jasmine",
			],
			githubUrl: "https://github.com/limpch/playtest-radar",
		},
		{
			title: "Roman Lipka Portfolio",
			type: "Frontend Project",
			description:
				"A personal portfolio website built with Next.js, React, TypeScript, and SCSS Modules. The project uses an FSD-inspired structure and includes localized content, language and theme switching, SSR rendering, and cookie-based user preferences.",
			responsibilities: [
				"Developed portfolio pages for home, about, experience, stack, and project cases.",
				"Organized profile, experience, skills, and project data through a typed content model.",
				"Implemented language and theme switching with persisted user preferences.",
				"Configured SSR-rendered localized content and cookie-based preferences.",
				"Built an FSD-inspired structure with separate shared, features, widgets, entities, and views layers.",
			],
			challenges: [
				"Supporting two languages without duplicating UI logic.",
				"Keeping SSR state aligned with client-side language and theme preferences.",
				"Maintaining a simple data structure for fast portfolio updates.",
			],
			improvements: [
				"Made the portfolio extensible so new cases can be added through the data model.",
				"Split the application into clear layers and reusable UI blocks.",
				"Created a stable base for further site development and public presentation of experience.",
			],
			stack: [
				"Next.js",
				"React",
				"TypeScript",
				"SCSS Modules",
				"SSR",
				"Cookies",
				"FSD-inspired architecture",
				"ESLint",
			],
			githubUrl: "https://github.com/limpch/Roman-Lipka",
		},
		{
			title: "Moneyport.ru",
			type: "Fullstack Project",
			description:
				"A service for international money transfers with a CRM system and client-facing interface. Worked on the frontend part of the main website and internal CRM system, focusing on real-time communication, PWA functionality, and application stability.",
			responsibilities: [
				"Developed and maintained the frontend part of the platform.",
				"Created a real-time chat using WebSocket.",
				"Developed PWA functionality for the client platform.",
				"Connected browser push notifications.",
				"Improved UX, frontend stability, and critical user flows.",
			],
			challenges: [
				"Implementing stable real-time functionality.",
				"Supporting PWA behavior across different user scenarios.",
				"Working with GraphQL and complex application state.",
			],
			improvements: [
				"Implemented PWA functionality with offline capabilities.",
				"Connected browser push notifications.",
				"Participated in refactoring frontend logic and improving application stability.",
			],
			stack: ["React", "TypeScript", "MobX", "GraphQL", "Apollo Client", "Motion", "SCSS Modules"],
		},
		{
			title: "Capsaty.ru",
			type: "Fullstack Project",
			description:
				"A platform for creating dynamic forms, collecting submissions, and sending data to email and Telegram. Developed both frontend and backend parts of the project and continued supporting and improving the platform after release.",
			responsibilities: [
				"Developed a dynamic form builder.",
				"Implemented typing and handling for dynamic form fields.",
				"Built submission processing and data storage logic.",
				"Developed analytics for submissions, forms, dates, and users.",
				"Integrated Telegram bots and email notifications.",
				"Implemented data export to Excel.",
			],
			challenges: [
				"Maintaining universal typing for dynamic fields.",
				"Building analytics across dates, forms, and users.",
				"Supporting an extensible architecture for the form builder.",
			],
			improvements: [
				"Improved the structure for working with dynamic field types.",
				"Increased backend stability and maintainability.",
				"Participated in designing new platform features.",
			],
			stack: [
				"React",
				"TypeScript",
				"SCSS Modules",
				"React Router",
				"Redux Toolkit",
				"Axios",
				"Motion",
				"Jest",
				"React Testing Library",
				"Express",
				"Multer",
				"MySQL",
				"node-telegram-bot-api",
				"Nodemailer",
				"xlsx",
			],
		},
		{
			title: "Avtostories.ru",
			type: "Frontend Project / Backend Microservice",
			description:
				"A Telegram Web App for generating stories and advertising images for automotive and construction companies. Worked as the sole Frontend Developer, participated in UX and product decisions, and developed a separate Express microservice for image generation.",
			responsibilities: [
				"Developed an SPA interface for Telegram Web App.",
				"Integrated Telegram Web App API.",
				"Created interfaces for generating stories from templates.",
				"Worked with animations, UX, and mobile-first interface adaptation.",
				"Developed a backend microservice for image generation.",
				"Contributed to the landing page and admin panel interfaces.",
			],
			challenges: [
				"Working within Telegram Web App limitations.",
				"Generating images on the backend side.",
				"Maintaining a simple and fast UX for content creation.",
			],
			improvements: [
				"Participated in designing user scenarios for quick content generation.",
				"Optimized the image generation flow.",
				"Coordinated design update tasks and improved interface usability.",
			],
			stack: [
				"React",
				"TypeScript",
				"SCSS Modules",
				"React Router",
				"Zustand",
				"Axios",
				"Motion",
				"Mantine",
				"Express",
				"Nodemon",
				"Next.js",
			],
		},
		{
			title: "Yrasa.ru",
			type: "Frontend Project",
			description:
				"A CRM system for managing real estate listings and automating work with Avito feeds. Worked as the sole Frontend Developer. Designed the SPA architecture, implemented complex business logic, and participated in product decision-making.",
			responsibilities: [
				"Developed interfaces for managing real estate listings.",
				"Implemented a complex filtering system with multiple parameters.",
				"Built mass editing functionality for listings.",
				"Implemented change history with the ability to view and roll back actions.",
				"Created listing creation and editing flows inside the CRM.",
				"Implemented role-based access control and permission management.",
				"Worked with large datasets, tables, and business-specific data flows.",
			],
			challenges: [
				"Maintaining performance while working with large lists and tables.",
				"Implementing complex filtering and mass operation logic.",
				"Keeping the SPA stable while business logic changed frequently.",
			],
			improvements: [
				"Optimized list and table rendering.",
				"Improved application state structure with Redux Toolkit.",
				"Participated in frontend architecture stabilization and refactoring.",
			],
			stack: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"React Router",
				"SCSS Modules",
				"Axios",
				"Jest",
				"React Testing Library",
			],
		},
	],
} satisfies Localized<ProjectCase[]>
