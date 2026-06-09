"use client"

import { profile } from "@/entities/profile/model/profile"
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher"
import { ThemeSwitcher } from "@/features/theme-switcher/ui/ThemeSwitcher"
import { useAppPreferences } from "@/shared/model/app-preferences"
import Link from "next/link"
import styles from "./HomePage.module.scss"

export function HomePage() {
	const { language } = useAppPreferences()

	return (
		<section className={styles.home}>
			<div className={styles.intro}>
				<p>{profile.role[language]}</p>
				<h1>{profile.homeTitle[language]}</h1>
				<Link className={styles.link} href="/about">
					{profile.readAbout[language]}
				</Link>
			</div>

			<div className={styles.controls}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</section>
	)
}

