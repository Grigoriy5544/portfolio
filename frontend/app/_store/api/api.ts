import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = 'http://localhost:5000/api/'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Skills', 'Projects'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
})