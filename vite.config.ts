import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugins } from './src/plugins'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd()) as ImportMetaEnv

	return defineConfig({
		plugins: [vue(), ...plugins],
		resolve: {
			alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }]
		},
		server: {
			proxy: {
				'/api': {
					target: env.VITE_AXIOS_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
		// esbuild: {
		// 	jsxFactory: 'h',
		// 	jsxFragment: 'Fragment'
		// }
	})
}
