/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	readonly VITE_AXIOS_URL: string
	readonly VITE_ROUTER_HISTORY: 'hash' | 'history' | 'memory'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

// router meta

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		icon?: string
		hidden?: boolean
		keepAlive?: boolean
	}
}
