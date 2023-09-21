import { TokenENUM } from '../../enum'

export class Token {
	public static setToken(token: string) {
		window.localStorage.setItem(TokenENUM.KEY, token)
	}

	public static getToken() {
		return window.localStorage.getItem(TokenENUM.KEY)
	}

	public static removeToken() {
		window.localStorage.removeItem(TokenENUM.KEY)
	}
}
