import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export const autoComponents = () => {
	return Components({
		dirs: ['src/components'],
		// 组件有效的扩展名
		extensions: ['vue'],
		dts: './src/interface/components.d.ts',
		deep: true,
		include: [/\.vue$/, /\.vue\?vue/],
		exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
		resolvers: [VantResolver(), IconsResolver({ prefix: false })]
	})
}
