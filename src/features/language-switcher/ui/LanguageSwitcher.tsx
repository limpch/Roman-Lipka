"use client"

import { languages, type Language } from "@/shared/i18n/config"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./LanguageSwitcher.module.scss"

const languageOptions = Object.entries(languages) as [Language, string][]

export function LanguageSwitcher() {
	const { language, changeLanguage, isAnimating } = useAppPreferences()

	return (
		<div className={styles.switcher} aria-label="Language">
			{languageOptions.map(([value, label]) => (
				<button
					key={value}
					type="button"
					className={language === value ? styles.active : undefined}
					disabled={isAnimating}
					aria-pressed={language === value}
					onClick={() => changeLanguage(value)}
				>
					{label}
				</button>
			))}
		</div>
	)
}
