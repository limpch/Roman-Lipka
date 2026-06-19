"use client"

import { projectCases } from "@/entities/profile/model/profile"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./PortfolioPage.module.scss"

export function PortfolioPage() {
	const { language } = useAppPreferences()
	const projects = projectCases[language]
	const labels =
		language === "ru"
			? {
					title: "Портфолио",
					intro: "Выбранные коммерческие проекты и продуктовые кейсы из frontend и fullstack опыта.",
					responsibilities: "Задачи",
					challenges: "Сложности",
					improvements: "Что улучшил",
				}
			: {
					title: "Portfolio",
					intro: "Selected commercial projects and product cases from frontend and fullstack experience.",
					responsibilities: "Main responsibilities",
					challenges: "Main challenges",
					improvements: "What I improved",
				}

	return (
		<section className={styles.page}>
			<div className={styles.heading}>
				<h1>{labels.title}</h1>
				<p>{labels.intro}</p>
			</div>

			<div className={styles.projects}>
				{projects.map((project) => (
					<article className={styles.project} key={project.title}>
						<header>
							<p>{project.type}</p>
							<h2>{project.title}</h2>
						</header>
						<p className={styles.description}>{project.description}</p>

						<div className={styles.columns}>
							<ProjectList
								title={labels.responsibilities}
								items={project.responsibilities}
							/>
							<ProjectList title={labels.challenges} items={project.challenges} />
							<ProjectList
								title={labels.improvements}
								items={project.improvements}
							/>
						</div>

						<div className={styles.tags}>
							{project.stack.map((technology) => (
								<span key={technology}>{technology}</span>
							))}
						</div>

						{project.githubUrl ? (
							<a
								className={styles.projectLink}
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						) : null}
					</article>
				))}
			</div>
		</section>
	)
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
	return (
		<section>
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</section>
	)
}
