export interface IRegistrationRequest {
	name: string
	surname: string
	email: string
	password: string
	id: string | null
	refreshToken: string | null
	accessToken: string | null
}

export interface IRegistrationResponse {
	id: string | null
	refreshToken: string | null
	accessToken: string | null
}

export interface ILoginRequest {
	id: string | null
	username: string
	password: string
	accessToken: string
	refreshToken: string
}

export interface ILoginResponse {
	id: string | null
	refreshToken: string | null
	accessToken: string | null
}

export interface IResetPasswordRequest {
	email: string
}

export interface IResetPasswordResponse {
	id: number
	email: string
	refreshToken: string | null
	accessToken: string | null
}