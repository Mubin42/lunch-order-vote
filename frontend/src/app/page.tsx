import FoodCard from '@/components/food-card/FoodCard';
import Navbar from '@/components/navbar/Navbar';
import { BASE_PADDING } from '@/lib/constants';
import { Flex, Heading, Select, Stack } from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex w='100vw' h='100vh' justify='center'>
			<Flex w='1280px' bg='whitesmoke' flexDirection='column' gap={8}>
				<Navbar />

				<Stack px={BASE_PADDING}>
					<Flex py={4} justify='space-between'>
						<Heading size='md'>Popular Foods</Heading>
						<Select placeholder='today'>
							<option value='option1'>Option 1</option>
							<option value='option2'>Option 2</option>
							<option value='option3'>Option 3</option>
						</Select>
					</Flex>
					<FoodCard />
					<FoodCard />
					<FoodCard />
				</Stack>
			</Flex>
		</Flex>
	);
}
