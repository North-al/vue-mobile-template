import { createApp } from 'vue'
import 'uno.css'
import '@unocss/reset/normalize.css'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'

const bootstrap = async () => {
	const app = createApp(App)
	setupRouter(app)
	app.mount('#app')
}

bootstrap()
