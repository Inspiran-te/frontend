import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import { AuthInitialStateInterface, DecodedJWTInterface } from './types'
import { RootState } from '../redux/store'
import { authApi } from '../api/auth'

export const authInitialState: AuthInitialStateInterface = {
	auth: {
		refresh: null,
		access: null,
		id: null,
		authenticated: false
	}
}

const slice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: {
					auth: { id, refresh, access }
				}
			}: PayloadAction<AuthInitialStateInterface>
		) => {
			state.auth.id = id
			state.auth.refresh = refresh
			state.auth.access = access
			state.auth.authenticated = true
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.login.matchFulfilled,
			(state, { payload: { id, refreshToken, accessToken } }) => {
				const decodedAccessToken = jwtDecode(accessToken) as DecodedJWTInterface
				state.auth.id = id
				state.auth.refresh = refreshToken
				state.auth.access = accessToken
			}
		)
	}
})

export const { setCredentials } = slice.actions
export const selectCredentials = (state: RootState) => state.auth.auth
export default slice.reducer