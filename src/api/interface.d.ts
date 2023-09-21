import { AxiosResponseDataKeyEum } from '~/enum'

export interface IResponseData<T = any> {
	[AxiosResponseDataKeyEum.code]: number
	[AxiosResponseDataKeyEum.data]: T
	[AxiosResponseDataKeyEum.message]: string
}
