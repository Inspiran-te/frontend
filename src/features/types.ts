export interface AuthInitialStateInterface {
	auth: {
		refresh: string | null
		access: string | null
		id: string | null
		authenticated: boolean
	};
}

export interface DecodedJWTInterface {
	exp: number
	iat: number
	jti: string
	token_type: string
	user_id: number
}