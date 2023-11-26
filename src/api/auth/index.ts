import { createApi } from '@reduxjs/toolkit/query/react'
import type {
	IRegistrationRequest,
	IRegistrationResponse,
	IResetPasswordResponse,
	ILoginRequest,
	ILoginResponse,
} from './types'
import { baseQueryInterceptor } from '../config'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQueryInterceptor,
	endpoints: (builder) => ({
		registration: builder.mutation<IRegistrationRequest, IRegistrationResponse>({
			query: (body) => ({
				url: '/auth/registration',
				method: 'POST',
				body
			}),
		}),
		login: builder.mutation<ILoginRequest, ILoginResponse>({
			query: (body) => ({
				url: 'auth/login',
				method: 'POST',
				body
			})
		})
	})
})

export const { useRegistrationMutation, useLoginMutation } = authApi