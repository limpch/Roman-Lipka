"use client"

import type { Language, ThemeMode } from "@/shared/i18n/config"
import { AppPreferencesProvider, useAppPreferences } from "@/shared/model/app-preferences"
import { Header } from "@/widgets/header/ui/Header"
import { usePathname } from "next/navigation"
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react"
import styles from "./AppShell.module.scss"

type AppShellProps = {
	children: ReactNode
	initialLanguage: Language
	initialThemeMode: ThemeMode
}

type AppShellInnerProps = {
	children: ReactNode
}

function AppShellInner({ children }: AppShellInnerProps) {
	const pathname = usePathname()
	const { transitionState } = useAppPreferences()
	const innerRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<number | null>(null)

	useEffect(() => {
		const element = innerRef.current

		if (!element) {
			return
		}

		const observer = new ResizeObserver(([entry]) => {
			setHeight(entry.contentRect.height)
		})

		observer.observe(element)
		const animationFrame = window.requestAnimationFrame(() => {
			setHeight(element.getBoundingClientRect().height)
		})

		return () => {
			window.cancelAnimationFrame(animationFrame)
			observer.disconnect()
		}
	}, [])

	const shellClassName = [styles.shell, transitionState === "theme" ? styles.themeTransition : ""]
		.filter(Boolean)
		.join(" ")

	const panelClassName = [
		styles.panel,
		transitionState === "language" ? styles.languageTransition : "",
	]
		.filter(Boolean)
		.join(" ")

	const panelStyle: CSSProperties = height === null ? {} : { height: `${height + 100}px` }

	return (
		<main className={shellClassName}>
			<div className={styles.panelFrame}>
				<section className={panelClassName} style={panelStyle}>
					<div className={styles.panelInner} ref={innerRef}>
						<Header />
						<div key={pathname} className={styles.content}>
							{children}
						</div>
					</div>
				</section>
			</div>
			<div className={styles.themeOverlay} aria-hidden="true" />
		</main>
	)
}

export function AppShell({ children, initialLanguage, initialThemeMode }: AppShellProps) {
	return (
		<AppPreferencesProvider initialLanguage={initialLanguage} initialThemeMode={initialThemeMode}>
			<AppShellInner>{children}</AppShellInner>
		</AppPreferencesProvider>
	)
}

