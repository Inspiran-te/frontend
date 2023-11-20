import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { RootState } from '../redux/store'

export const localApiPath = 'http://45.141.79.27:8083'

const createQuery = (baseUrl: string) =>
	fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.auth.access;
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	});

export const baseQuery = createQuery(localApiPath);

export const baseQueryInterceptor: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
	> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	return result;
};