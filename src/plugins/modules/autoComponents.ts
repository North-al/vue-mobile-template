import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export const autoComponents = () => {
	return Components({
		resolvers: [VantResolver()]
	})
}
