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
		ru: "Frontend TypeScript Developer",
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
			"Frontend Developer с 4+ годами коммерческого опыта в разработке SPA-приложений и внутренних B2B/B2C систем на React и TypeScript. Работал в продуктовых компаниях и агентской среде, часто параллельно на нескольких проектах. На ряде проектов был единственным Frontend Developer и отвечал за frontend-архитектуру, интеграцию с backend, UI/UX, стабильность после релизов и продуктовые технические решения. Сейчас ищу удаленную позицию в продуктовой команде, где смогу участвовать во frontend-разработке, росте продукта, архитектуре и технической стратегии.",
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
			"Frontend Developer with 4+ years of commercial experience building SPA applications and internal B2B/B2C systems using React and TypeScript. Experienced in both product companies and agency environments, often working across multiple projects simultaneously. Frequently served as the sole Frontend Developer, taking ownership of frontend architecture, frontend-backend integration, UI/UX implementation, and post-release product stability. Currently seeking a remote position within a product-focused team where I can contribute to frontend development, product growth, architecture decisions, and technical strategy.",
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
				"React",
				"TypeScript",
				"Next.js",
				"Redux Toolkit",
				"Zustand",
				"RTK Query",
				"React Router",
			],
		},
		{
			title: "Realtime и API",
			items: ["WebSocket", "REST API", "GraphQL", "Apollo Client"],
		},
		{
			title: "Backend и Tooling",
			items: ["Node.js", "Express", "NestJS", "Docker", "Vite", "Webpack"],
		},
		{
			title: "Testing и качество",
			items: ["Jest", "React Testing Library", "Sentry"],
		},
		{
			title: "UI и Styling",
			items: ["SCSS", "SCSS Modules", "Figma", "responsive UI", "complex forms and tables"],
		},
	],
	en: [
		{
			title: "Frontend",
			items: [
				"React",
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
				"Продуктовая компания, разрабатывающая внутренние CRM-решения и клиентские платформы. Работал над CRM и клиентской платформой: real-time функциональность, внутренние коммуникации, PWA, стабильность frontend и улучшение UX.",
			points: [
				"Разрабатывал и поддерживал CRM и client-facing platform features на React и TypeScript.",
				"Реализовал real-time functionality на WebSocket: live updates, status changes и user notifications.",
				"Разрабатывал internal chat system и notification flows для business processes.",
				"Собрал PWA functionality: offline mode, push notifications и installation support for user devices.",
				"Рефакторил legacy frontend code для улучшения maintainability, readability и application stability.",
				"Улучшал существующие UI components, forms, user flows и internal tools.",
				"Интегрировал frontend features с backend services и GraphQL API.",
				"Управлял состоянием приложения через Redux Toolkit.",
				"Работал с backend developers и designers, чтобы согласовать реализацию с product requirements.",
				"Поддерживал released features и исправлял production issues.",
			],
			sections: [
				{
					title: "Real-time functionality",
					points: [
						"Внедрил WebSocket-based live data updates и работал над chat logic, message states, notifications и user interaction flows.",
						"Повысил stability of real-time communication between frontend and backend.",
					],
				},
				{
					title: "PWA development",
					points: [
						"Разработал PWA features для client platform: selected offline-mode scenarios, push notifications и device installation flow.",
					],
				},
				{
					title: "Legacy code refactoring",
					points: [
						"Рефакторил frontend modules and components, улучшал code structure и стабилизировал critical user flows after releases.",
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
				"IT-компания, разрабатывающая внутренние B2B и B2C продукты. Участвовал в разработке CRM systems, admin panels, Telegram Web Apps и client-facing SPA applications. На нескольких проектах был sole Frontend Developer и отвечал за frontend architecture, integration, product-related technical decisions и post-release stability.",
			points: [
				"Разрабатывал SPA applications на React и TypeScript.",
				"Создавал B2B admin panels и CRM systems для internal business processes.",
				"Делал complex UI components, dynamic forms, tables, filters, pagination и analytics interfaces.",
				"Интегрировал REST API и real-time functionality.",
				"Проектировал и поддерживал application state architecture на Redux Toolkit и Zustand.",
				"Рефакторил legacy code и улучшал application stability.",
				"Оптимизировал frontend performance и сокращал unnecessary client-server requests.",
				"Участвовал в code reviews и работал с backend developers и designers.",
				"Поддерживал released features и исправлял production issues.",
			],
			sections: [
				{
					title: "SPA performance optimization",
					points: [
						"Улучшил loading speed of the main application feed.",
						"Внедрил lazy loading, dynamic imports, virtualized lists with react-window и request caching with RTK Query.",
						"Снизил backend load by minimizing repeated requests.",
					],
				},
				{
					title: "Internal reporting automation",
					points: [
						"Реализовал automated report export system with Excel file generation, Google Sheets API integration и Telegram notifications.",
						"Помог reduce manual work for managers и speed up daily reporting processes.",
					],
				},
				{
					title: "Release and production support",
					points: [
						"Участвовал в urgent fixes for production issues before and after releases.",
						"Настроил error monitoring with Sentry и fallback mechanisms for critical user-facing functionality.",
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
			type: "Fullstack Project",
			description:
				"Сервис автоматического распределения лидов между клиентами по tags, limits и routing rules. Работал как единственный Fullstack Developer; большинство архитектурных и продуктовых решений принимал самостоятельно из-за неполных initial requirements.",
			responsibilities: [
				"Разработал frontend и backend части системы.",
				"Реализовал lead routing logic на основе tags, sources, clients и business rules.",
				"Построил функциональность управления clients, sources и tags.",
				"Реализовал lead limits, client queues и distribution logic.",
				"Добавил backend protection от spam и external unauthorized requests.",
				"Интегрировал Telegram и email notifications.",
			],
			challenges: [
				"Designing the core lead distribution logic.",
				"Building a flexible limits and queue system.",
				"Working with a high level of uncertainty in product requirements.",
			],
			improvements: [
				"Самостоятельно спроектировал core service architecture.",
				"Реализовал API keys и backend request protection.",
				"Ускорил MVP delivery за счет Mantine UI для fast and consistent interface development.",
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
			title: "Moneyport.ru",
			type: "Fullstack Project",
			description:
				"Сервис международных денежных переводов с CRM system и client-facing interface. Работал над frontend основной страницы и internal CRM system, focusing on real-time communication, PWA functionality и application stability.",
			responsibilities: [
				"Разрабатывал и поддерживал frontend part of the platform.",
				"Создал real-time chat using WebSocket.",
				"Разработал PWA functionality for the client platform.",
				"Подключил browser push notifications.",
				"Улучшал UX, frontend stability и critical user flows.",
			],
			challenges: [
				"Implementing stable real-time functionality.",
				"Supporting PWA behavior across different user scenarios.",
				"Working with GraphQL and complex application state.",
			],
			improvements: [
				"Реализовал PWA functionality with offline capabilities.",
				"Подключил browser push notifications.",
				"Участвовал в refactoring frontend logic and improving application stability.",
			],
			stack: ["React", "TypeScript", "MobX", "GraphQL", "Apollo Client", "Motion", "SCSS Modules"],
		},
		{
			title: "Capsaty.ru",
			type: "Fullstack Project",
			description:
				"Платформа для создания dynamic forms, collecting submissions и sending data to email and Telegram. Разрабатывал frontend и backend, продолжал поддержку и улучшение платформы после release.",
			responsibilities: [
				"Разработал dynamic form builder.",
				"Реализовал typing and handling for dynamic form fields.",
				"Построил submission processing and data storage logic.",
				"Разработал analytics for submissions, forms, dates, and users.",
				"Интегрировал Telegram bots and email notifications.",
				"Реализовал data export to Excel.",
			],
			challenges: [
				"Maintaining universal typing for dynamic fields.",
				"Building analytics across dates, forms, and users.",
				"Supporting an extensible architecture for the form builder.",
			],
			improvements: [
				"Улучшил структуру работы with dynamic field types.",
				"Повысил backend stability and maintainability.",
				"Участвовал в designing new platform features.",
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
				"Telegram Web App для генерации stories и advertising images для automotive and construction companies. Работал как sole Frontend Developer, участвовал в UX/product decisions и разработал Express microservice for image generation.",
			responsibilities: [
				"Разработал SPA interface for Telegram Web App.",
				"Интегрировал Telegram Web App API.",
				"Создал interfaces for generating stories from templates.",
				"Работал с animations, UX и mobile-first interface adaptation.",
				"Разработал backend microservice for image generation.",
				"Участвовал в landing page and admin panel interfaces.",
			],
			challenges: [
				"Working within Telegram Web App limitations.",
				"Generating images on the backend side.",
				"Maintaining a simple and fast UX for content creation.",
			],
			improvements: [
				"Участвовал в designing user scenarios for quick content generation.",
				"Оптимизировал image generation flow.",
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
				"CRM system для управления real estate listings и автоматизации работы with Avito feeds. Работал как sole Frontend Developer: designed SPA architecture, implemented complex business logic и participated in product decision-making.",
			responsibilities: [
				"Разработал interfaces for managing real estate listings.",
				"Реализовал complex filtering system with multiple parameters.",
				"Построил mass editing functionality for listings.",
				"Реализовал change history with the ability to view and roll back actions.",
				"Создал listing creation and editing flows inside the CRM.",
				"Реализовал role-based access control and permission management.",
				"Работал with large datasets, tables, and business-specific data flows.",
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

