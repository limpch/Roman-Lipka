import type { RouteKey } from "@/shared/config/routes"

export type Language = "ru" | "en"
export type ThemeMode = "light" | "dark" | "system"

export const languages: Record<Language, string> = {
	ru: "RU",
	en: "EN",
}

export const dictionary: Record<
	Language,
	{
		nav: Record<RouteKey, string>
		pages: Record<RouteKey, string>
		controls: {
			language: string
			theme: string
			light: string
			dark: string
			system: string
		}
	}
> = {
	ru: {
		nav: {
			home: "Главная",
			about: "Обо мне",
			experience: "Опыт",
			stack: "Стек",
			portfolio: "Портфолио",
		},
		pages: {
			home: "Главная страница",
			about: "Обо мне",
			experience: "Опыт",
			stack: "Технологический стек",
			portfolio: "Портфолио",
		},
		controls: {
			language: "Язык",
			theme: "Тема",
			light: "Светлая",
			dark: "Темная",
			system: "Системная",
		},
	},
	en: {
		nav: {
			home: "Home",
			about: "About",
			experience: "Experience",
			stack: "Stack",
			portfolio: "Portfolio",
		},
		pages: {
			home: "Home page",
			about: "About me",
			experience: "Experience",
			stack: "Stack - technologies",
			portfolio: "Portfolio",
		},
		controls: {
			language: "Language",
			theme: "Theme",
			light: "Light",
			dark: "Dark",
			system: "System",
		},
	},
}
