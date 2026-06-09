"use client"

import {
	defaultLanguage,
	defaultThemeMode,
	preferenceCookieKeys,
} from "@/shared/config/preferences"
import type { Language, ThemeMode } from "@/shared/i18n/config"
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from "react"

type EffectiveTheme = "light" | "dark"
type TransitionState = "idle" | "language" | "theme"

type AppPreferencesContextValue = {
	language: Language
	themeMode: ThemeMode
	effectiveTheme: EffectiveTheme
	transitionState: TransitionState
	isAnimating: boolean
	changeLanguage: (language: Language) => void
	changeTheme: (theme: ThemeMode) => void
}

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365
const THEME_APPLY_DELAY_MS = 430
const THEME_TRANSITION_MS = 600

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null)
const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const getSystemTheme = (): EffectiveTheme => {
	if (typeof window === "undefined") {
		return "light"
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

type AppPreferencesProviderProps = {
	children: ReactNode
	initialLanguage?: Language
	initialThemeMode?: ThemeMode
}

const setPreferenceCookie = (name: string, value: string) => {
	document.cookie = `${name}=${value}; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`
}

export function AppPreferencesProvider({
	children,
	initialLanguage = defaultLanguage,
	initialThemeMode = defaultThemeMode,
}: AppPreferencesProviderProps) {
	const [language, setLanguage] = useState<Language>(initialLanguage)
	const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode)
	const [systemTheme, setSystemTheme] = useState<EffectiveTheme>(getSystemTheme)
	const [transitionState, setTransitionState] = useState<TransitionState>("idle")
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)")
		const handleChange = () => setSystemTheme(getSystemTheme())

		media.addEventListener("change", handleChange)
		return () => media.removeEventListener("change", handleChange)
	}, [])

	useEffect(() => {
		setPreferenceCookie(preferenceCookieKeys.language, language)
		setPreferenceCookie(preferenceCookieKeys.theme, themeMode)
	}, [language, themeMode])

	const effectiveTheme = themeMode === "system" ? systemTheme : themeMode

	useBrowserLayoutEffect(() => {
		document.documentElement.dataset.theme = effectiveTheme
		document.documentElement.dataset.themeMode = themeMode
		document.documentElement.lang = language
		document.documentElement.dataset.appReady = "true"
	}, [effectiveTheme, language, themeMode])

	const changeLanguage = useCallback(
		(nextLanguage: Language) => {
			if (nextLanguage === language || isAnimating) {
				return
			}

			setIsAnimating(true)
			setTransitionState("language")

			window.setTimeout(() => {
				setLanguage(nextLanguage)
				setPreferenceCookie(preferenceCookieKeys.language, nextLanguage)
			}, 280)

			window.setTimeout(() => {
				setTransitionState("idle")
				setIsAnimating(false)
			}, 620)
		},
		[isAnimating, language]
	)

	const changeTheme = useCallback(
		(nextTheme: ThemeMode) => {
			if (nextTheme === themeMode || isAnimating) {
				return
			}

			setIsAnimating(true)
			setTransitionState("theme")
			document.documentElement.dataset.themeSwitching = "true"

			window.setTimeout(() => {
				const nextEffectiveTheme = nextTheme === "system" ? getSystemTheme() : nextTheme

				document.documentElement.dataset.theme = nextEffectiveTheme
				document.documentElement.dataset.themeMode = nextTheme
				setThemeMode(nextTheme)
				setPreferenceCookie(preferenceCookieKeys.theme, nextTheme)
			}, THEME_APPLY_DELAY_MS)

			window.setTimeout(() => {
				delete document.documentElement.dataset.themeSwitching
				setTransitionState("idle")
				setIsAnimating(false)
			}, THEME_TRANSITION_MS)
		},
		[isAnimating, themeMode]
	)

	const value = useMemo(
		() => ({
			language,
			themeMode,
			effectiveTheme,
			transitionState,
			isAnimating,
			changeLanguage,
			changeTheme,
		}),
		[changeLanguage, changeTheme, effectiveTheme, isAnimating, language, themeMode, transitionState]
	)

	return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>
}

export function useAppPreferences() {
	const context = useContext(AppPreferencesContext)

	if (!context) {
		throw new Error("useAppPreferences must be used inside AppPreferencesProvider")
	}

	return context
}

