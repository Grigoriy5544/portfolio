import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Skills', 'Projects'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL + 'api/' }),
    endpoints: () => ({}),
})