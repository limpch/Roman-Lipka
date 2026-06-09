import { AppShell } from "@/widgets/app-shell/ui/AppShell"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import {
	defaultLanguage,
	defaultThemeMode,
	isLanguage,
	isThemeMode,
	preferenceCookieKeys,
} from "@/shared/config/preferences"
import "./globals.scss"

export const metadata: Metadata = {
	title: "Roman Lipka Portfolio",
	description:
		"A portfolio website showcasing the work and projects of Roman Lipka, a software developer specializing in web development and design.",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const cookieLanguage = cookieStore.get(preferenceCookieKeys.language)?.value
	const cookieTheme = cookieStore.get(preferenceCookieKeys.theme)?.value
	const initialLanguage = isLanguage(cookieLanguage)
		? cookieLanguage
		: defaultLanguage
	const initialThemeMode = isThemeMode(cookieTheme)
		? cookieTheme
		: defaultThemeMode
	const themeAttribute =
		initialThemeMode === "system" ? undefined : initialThemeMode

	return (
		<html
			lang={initialLanguage}
			data-theme={themeAttribute}
			data-theme-mode={initialThemeMode}
			suppressHydrationWarning
		>
			<body>
				<div className="app-loader" aria-hidden="true">
					<span />
				</div>
				<AppShell
					initialLanguage={initialLanguage}
					initialThemeMode={initialThemeMode}
				>
					{children}
				</AppShell>
			</body>
		</html>
	)
}
