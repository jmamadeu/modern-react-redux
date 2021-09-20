import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = "20af1930-310e-4e32-a3f1-50836359e3d7"

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers){
      headers.set('x-api-key', DOGS_API_KEY)

      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchBreed: builder.query<Breed[], number | void>({
        query(limit = 10){
          return `/breeds?limit=${limit}`
        }
      }) 
    }
  }
}) 

export const { useFetchBreedQuery } = apiSlice
