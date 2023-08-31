import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'

export class HTTP {

	private readonly axiosInstance: AxiosInstance

	constructor(baseURL: string) {
		this.axiosInstance = axios.create({
			baseURL,
			timeout: 10000
		})

		this.requestInterceptors()
		this.responseInterceptors()
	}

	public requestInterceptors() {
		axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			config.headers['Content-Type'] = 'application/json'
			return config
		})
	}

	public responseInterceptors() {
		axios.interceptors.response.use((response: AxiosResponse) => {
			return response
		})
	}


	public get instance() {
		return this.axiosInstance
	}

	private get<T>(url: string, params: T, options?: AxiosHeaders) {
		return this.axiosInstance.get(url, { params, ...options })
	}

	private post<T>(url: string, data: T, options?: AxiosHeaders) {
		return this.axiosInstance.post(url, data, {
			...options
		})
	}

	private put<T>(url: string, data: T, options?: AxiosHeaders) {
		return this.axiosInstance.put(url, data, {
			...options
		})
	}

	private remove<T>(url: string, params: T, options?: AxiosHeaders) {
		return this.axiosInstance.delete(url, { params, ...options })
	}
}
