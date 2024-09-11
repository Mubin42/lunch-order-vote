'use client';
import FoodCard from '@/components/food-card/FoodCard';
import Navbar from '@/components/navbar/Navbar';
import { getDay } from '@/functions/getDay';
import { BASE_PADDING } from '@/lib/constants';
import { Flex, Heading, Input, Select, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
	const [date, setDate] = useState('');

	const day = getDay(date);

	return (
		<Flex w='100vw' h='100vh' justify='center'>
			<Flex w='1280px' bg='whitesmoke' flexDirection='column' gap={8} overflowY='scroll'>
				<Navbar />
				<Stack px={BASE_PADDING}>
					<Flex py={4} justify='space-between'>
						<Heading size='md'>Menu {date && day}</Heading>
						<Flex gap={2} align='center'>
							Choose Date:
							<Input
								w={48}
								bg='white'
								type='date'
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</Flex>
					</Flex>
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />
				</Stack>
			</Flex>
		</Flex>
	);
}
