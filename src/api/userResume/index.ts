import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResumeRequest, IResumeResponse } from './types'

export const resumeApi = createApi({
    reducerPath: 'resumeApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://45.141.79.27:8084',
    }),
    endpoints: (builder) => ({
      getResume: builder.query<any, IResumeRequest>({
        query: ({ userId, userToken }) => ({
          url: `/pdf/uploaded/${userId}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }),
      }),
      deleteResume: builder.mutation<any, IResumeRequest>({
        query: ({ userId, userToken }) => ({
          url: `/pdf/uploaded/${userId}`,
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }),
      }),
    }),
  })
  
  export const { useGetResumeQuery, useDeleteResumeMutation } = resumeApi