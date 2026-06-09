"use client"

import { experience } from "@/entities/profile/model/profile"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./ExperiencePage.module.scss"

export function ExperiencePage() {
	const { language } = useAppPreferences()
	const items = experience[language]

	return (
		<section className={styles.page}>
			<h1>{language === "ru" ? "Опыт" : "Experience"}</h1>

			<div className={styles.timeline}>
				{items.map((item) => (
					<article className={styles.card} key={item.company}>
						<header className={styles.cardHeader}>
							<div>
								<p>{item.company}</p>
								<h2>{item.role}</h2>
							</div>
							<span>
								{item.period} | {item.location}
							</span>
						</header>

						<p className={styles.description}>{item.description}</p>

						<ul>
							{item.points.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>

						<div className={styles.details}>
							{item.sections.map((section) => (
								<section key={section.title}>
									<h3>{section.title}</h3>
									<ul>
										{section.points.map((point) => (
											<li key={point}>{point}</li>
										))}
									</ul>
								</section>
							))}
						</div>

						<div className={styles.tags}>
							{item.stack.map((technology) => (
								<span key={technology}>{technology}</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
