import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'

const bootstrap = async () => {
	const app = createApp(App)
	setupRouter(app)
	app.mount('#app')
}

bootstrap()