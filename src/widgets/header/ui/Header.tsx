"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { routes } from "@/shared/config/routes"
import { dictionary } from "@/shared/i18n/config"
import { useAppPreferences } from "@/shared/model/app-preferences"
import styles from "./Header.module.scss"

export function Header() {
	const pathname = usePathname()
	const { language } = useAppPreferences()
	const nav = dictionary[language].nav

	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label="Main navigation">
				{routes.map((route) => (
					<Link
						key={route.path}
						className={
							pathname === route.path ? styles.activeLink : undefined
						}
						href={route.path}
					>
						{nav[route.key]}
					</Link>
				))}
			</nav>
		</header>
	)
}
