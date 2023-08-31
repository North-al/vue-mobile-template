import { RouteLocationRaw } from 'vue-router'


const routerArr: RouteLocationRaw[] = []
const importAllPage = () => {
	const modules = import.meta.glob('../pages/**/*.vue', { eager: true })
	console.log({modules})
	for (const filePath in modules) {
		const path = filePath.match(/\.\/pages(.*)\.vue$/)?.[1] || ''

		// 将path转换为name
		const nameArr = path.split('/').filter(Boolean)
		let name = ''
		for (let i = 0; i < nameArr.length; i++) {
			const nameItem = nameArr[i]
			name += nameItem.replace(/^\S/, s => s.toUpperCase())
		}

		const component = modules[filePath]
		routerArr.push({
			path,
			name,
			component: component.default
		})
	}
}

importAllPage()



export const routes: RouteLocationRaw = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../pages/home/index.vue')
	},
	...routerArr
]