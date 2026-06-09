"use client"

import { skillGroups } from "@/entities/profile/model/profile"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./StackPage.module.scss"

export function StackPage() {
	const { language } = useAppPreferences()
	const groups = skillGroups[language]

	return (
		<section className={styles.page}>
			<h1>{language === "ru" ? "Стек - технологии" : "Stack - technologies"}</h1>

			<div className={styles.grid}>
				{groups.map((group) => (
					<section className={styles.group} key={group.title}>
						<h2>{group.title}</h2>
						<div className={styles.tags}>
							{group.items.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>
					</section>
				))}
			</div>
		</section>
	)
}
