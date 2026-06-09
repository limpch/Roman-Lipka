"use client"

import type { RouteKey } from "@/shared/config/routes"
import { dictionary } from "@/shared/i18n/config"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./RoutePage.module.scss"

type RoutePageProps = {
	pageKey: RouteKey
}

export function RoutePage({ pageKey }: RoutePageProps) {
	const { language } = useAppPreferences()

	return (
		<section className={styles.page}>
			<h1>{dictionary[language].pages[pageKey]}</h1>
		</section>
	)
}
