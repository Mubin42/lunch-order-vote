'use client';
import FoodCard from '@/components/food-card/FoodCard';
import PageLayout from '@/components/layouts/PageLayout';
import { getDay } from '@/functions/getDay';
import { BASE_PADDING } from '@/lib/constants';
import { useGetMealsQuery } from '@/store/services/mainApi';
import { Flex, Heading, Input, Stack, Tag, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

	const day = getDay(date);

	const { data } = useGetMealsQuery({ params: { date } });

	const head = (
		<Flex
			py={4}
			justify='space-between'
			flexDirection={{
				base: 'column',
				md: 'row',
			}}
			gap={4}
		>
			<Flex gap={2} align='center'>
				<Heading fontSize='2rem' fontWeight={600}>
					Menu
				</Heading>
				{date && (
					<Tag colorScheme='blue' size='lg' variant='outline'>
						{day}
					</Tag>
				)}
			</Flex>
			<Flex gap={2} align='center'>
				<Text fontWeight={500}>Choose Date:</Text>
				<Input
					w={48}
					size='sm'
					borderRadius={4}
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</Flex>
		</Flex>
	);

	return (
		<PageLayout>
			<Stack px={BASE_PADDING}>
				{head}
				{data?.data && data?.data?.map((meal) => <FoodCard key={meal.id} data={meal} />)}
			</Stack>
		</PageLayout>
	);
}
