import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export const autoImport = () => {
	return AutoImport({
		include: [
			/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.vue$/,
			/\.vue\?vue/ // .vue
		],
		imports: [
			// presets
			'vue',
			'vue-router',
			{
				'~/hooks': ['usePage'],
				vue: ['KeepAlive']
			},
			{
				from: 'vue-router',
				imports: ['RouteLocationRaw'],
				type: true
			},
			{
				from: 'vant',
				imports: ['showToast']
			}
		],
		dts: './src/interface/auto-imports.d.ts',
		resolvers: [VantResolver()],
		eslintrc: {
			enabled: true, // Default `false`
			filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		}
	})
}
