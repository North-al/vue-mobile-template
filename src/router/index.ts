import type { App } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { routes } from './getRoutes.ts'

const history = {
	hash: createWebHistory(),
	history: createWebHistory(),
	memory: createMemoryHistory()
}

const router = createRouter({
	history: history[import.meta.env.VITE_ROUTER_HISTORY],
	routes
})


export const setupRouter = (app: App<Element>) => {
	app.use(router)
}