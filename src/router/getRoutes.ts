import { RouteRecordRaw } from 'vue-router'

const routerArr: RouteRecordRaw[] = []
const importAllPage = () => {
	const modules = import.meta.glob('../pages/**/*.tsx', { eager: true })
	for (const filePath in modules) {
		const path = filePath.match(/\.\/pages(.*)\.tsx$/)?.[1] || ''

		// 将path转换为name
		const nameArr = path.split('/').filter(Boolean)
		let name = ''
		for (let i = 0; i < nameArr.length; i++) {
			const nameItem = nameArr[i]
			name += nameItem.replace(/^\S/, s => s.toUpperCase())
		}

		const component = modules[filePath] as { default: any }

		routerArr.push({
			path,
			name,
			component: component.default
		})
	}
}

importAllPage()

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../pages/home/index')
	},
	...routerArr
]
