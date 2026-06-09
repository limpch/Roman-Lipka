export const routes = [
	{ path: "/", key: "home" },
	{ path: "/about", key: "about" },
	{ path: "/experience", key: "experience" },
	{ path: "/stack", key: "stack" },
	{ path: "/portfolio", key: "portfolio" },
] as const

export type RouteKey = (typeof routes)[number]["key"]
