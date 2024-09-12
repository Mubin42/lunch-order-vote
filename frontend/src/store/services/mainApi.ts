import { URL } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetMealsResponse } from './ServiceTypes';

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.root}`,
	}),

	endpoints: (builder) => ({
		getMeals: builder.query<
			GetMealsResponse,
			{
				params: {
					date: string;
				};
			}
		>({
			query: ({ params }) => ({
				url: 'meals/daily',
				method: 'GET',
				params,
			}),
		}),
	}),
});

export const { useGetMealsQuery } = mainApi;

export default mainApi;
