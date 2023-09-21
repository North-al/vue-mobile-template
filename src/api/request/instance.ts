import { HTTP } from './index'

const baseURL_Dict = {
	development: '/api',
	production: import.meta.env.VITE_AXIOS_URL,
	test: '/api'
}

const baseURL = baseURL_Dict[process.env.NODE_ENV]

export const { get, post, put, remove } = new HTTP({ baseURL })
