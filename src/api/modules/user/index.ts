import { get, post } from '~/api/request/instance'

export const fetchUserLogin = (params: ILoginParams) => post('/user/login', params)

export const fetchMyMessage = (params: IPage) => get('/user/getMessage', params)
