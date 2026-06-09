"use client"

import { about, profile } from "@/entities/profile/model/profile"
import { useAppPreferences } from "@/shared/model/app-preferences"
import Image from "next/image"
import styles from "./AboutPage.module.scss"

export function AboutPage() {
	const { language } = useAppPreferences()
	const content = about[language]

	return (
		<section className={styles.page}>
			<div className={styles.hero}>
				<Image
					className={styles.photo}
					src="/roman-lipka.jpeg"
					alt={profile.name}
					width={420}
					height={538}
					priority
				/>
				<div className={styles.summary}>
					<p className={styles.eyebrow}>
						{profile.role[language]} {profile.age[language]}
					</p>
					<h1>{content.title}</h1>
					<p>{content.summary}</p>
				</div>
			</div>

			<div className={styles.infoGrid}>
				<section>
					<h2>{content.contactsTitle}</h2>
					<a className={styles.link} href={`mailto:${profile.email}`}>
						{profile.email}
					</a>
					<a
						className={styles.link}
						href="www.linkedin.com/in/limpchh"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</section>
				<section>
					<h2>{content.languagesTitle}</h2>
					<p>{content.languages}</p>
				</section>
				<section>
					<h2>{content.educationTitle}</h2>
					<p>{content.education}</p>
				</section>
			</div>
		</section>
	)
}

