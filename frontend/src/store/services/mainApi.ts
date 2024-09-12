import { URL } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetEmployeesResponse, GetMealResponse, GetMealsResponse } from './ServiceTypes';

type TagType = 'meal' | 'employee';

const tags: TagType[] = ['meal', 'employee'];

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.root}`,
	}),
	tagTypes: tags,

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
			providesTags: ['meal'],
		}),

		getEmployees: builder.query<GetEmployeesResponse, void>({
			query: () => ({
				url: 'employees',
				method: 'GET',
			}),
			providesTags: ['employee'],
		}),
	}),
});

export const { useGetMealsQuery, useGetEmployeesQuery } = mainApi;

export default mainApi;
