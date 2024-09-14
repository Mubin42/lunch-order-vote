'use client';
import FoodCard from '@/components/food-card/FoodCard';
import PageLayout from '@/components/layouts/PageLayout';
import { getDay } from '@/functions/getDay';
import { BASE_PADDING } from '@/lib/constants';
import { useGetMealsQuery } from '@/store/services/mainApi';
import {
	Alert,
	AlertIcon,
	Flex,
	Heading,
	Icon,
	IconButton,
	Input,
	Stack,
	Tag,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Home() {
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

	// Get the day of the week
	const day = getDay(date);

	// Fetch all meals for the selected
	const { data, isSuccess, isLoading } = useGetMealsQuery({ params: { date } });

	// Check if there are no votes applied to any meal
	const isAnyVote = data?.data?.some((meal) => meal?.votes?.length === 1) || false;

	// Function to go to the next day
	const next = () => {
		const currentDate = new Date(date);
		currentDate.setDate(currentDate.getDate() + 1);
		setDate(currentDate.toISOString().split('T')[0]);
	};

	// Function to go to the previous day
	const prev = () => {
		const currentDate = new Date(date);
		currentDate.setDate(currentDate.getDate() - 1);
		setDate(currentDate.toISOString().split('T')[0]);
	};

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
					w={32}
					size='sm'
					borderRadius={4}
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>

				<Tooltip label='Previous Day'>
					<IconButton
						colorScheme='blue'
						size='sm'
						variant='outline'
						aria-label='left-icon'
						onClick={prev}
					>
						<Icon as={FiChevronLeft} />
					</IconButton>
				</Tooltip>
				<Tooltip label='Next Day'>
					<IconButton
						colorScheme='blue'
						size='sm'
						variant='outline'
						aria-label='right-icon'
						onClick={next}
					>
						<Icon as={FiChevronRight} />
					</IconButton>
				</Tooltip>
			</Flex>
		</Flex>
	);

	return (
		<PageLayout>
			<Stack px={BASE_PADDING}>
				{head}
				{/* Loading Message */}
				{isLoading && <Text>Loading...</Text>}
				{/* If no votes are cast, alert will be shown */}
				{isSuccess && !isAnyVote && (
					<Alert status='info' variant='left-accent'>
						<AlertIcon />
						{`No votes have been cast. Be the first to vote for today's meals!`}
					</Alert>
				)}
				{isSuccess && !data?.data?.length ? (
					<Text>No meals found for this date</Text>
				) : (
					data?.data?.map((meal, index) => (
						<FoodCard key={meal.id} data={meal} isWinner={meal?.votes?.length > 0 && index === 0} />
					))
				)}
			</Stack>
		</PageLayout>
	);
}
