import { URL } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.root}`,
	}),

	endpoints: (builder) => ({}),
});

export const {} = mainApi;

export default mainApi;
