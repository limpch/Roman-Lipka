import type { Language, ThemeMode } from "@/shared/i18n/config"

export const preferenceCookieKeys = {
	language: "portfolio-language",
	theme: "portfolio-theme",
} as const

export const defaultLanguage: Language = "en"
export const defaultThemeMode: ThemeMode = "system"

export const isLanguage = (value: string | undefined | null): value is Language =>
	value === "ru" || value === "en"

export const isThemeMode = (
	value: string | undefined | null,
): value is ThemeMode =>
	value === "light" || value === "dark" || value === "system"
