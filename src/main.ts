import { createApp } from 'vue'
import App from './App'
import { setupRouter } from './router'
import { setupStyle } from './styles'

const bootstrap = async () => {
	const app = createApp(App)
	setupRouter(app)
	setupStyle()
	app.mount('#app')
}

bootstrap()
