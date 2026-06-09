"use client"

import { dictionary, type ThemeMode } from "@/shared/i18n/config"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./ThemeSwitcher.module.scss"

const themeOptions: ThemeMode[] = ["light", "dark", "system"]

export function ThemeSwitcher() {
	const { language, themeMode, changeTheme, isAnimating } =
		useAppPreferences()
	const controls = dictionary[language].controls

	return (
		<div className={styles.switcher} aria-label={controls.theme}>
			{themeOptions.map((theme) => (
				<button
					key={theme}
					type="button"
					className={themeMode === theme ? styles.active : undefined}
					disabled={isAnimating}
					aria-pressed={themeMode === theme}
					onClick={() => changeTheme(theme)}
				>
					{controls[theme]}
				</button>
			))}
		</div>
	)
}
