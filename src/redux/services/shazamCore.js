import { creatApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('x-rapidapi-key', '42624812b1mshf473ea73a3ebb1fp11932ajsn2e2edf9805af')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),

    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;