import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Icon,
	Image,
	ListItem,
	Stack,
	Tag,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

type Props = {};

const data = {
	id: 'cm0yxu7v000035x2jn4udwe8d',
	name: 'Chicken Currry Rice',
	price: 120,
	restaurantId: 'cm0y507s30000230nonk2u9h6',
	day: 'THURSDAY',
	createdAt: '2024-09-12T06:58:17.292Z',
	updatedAt: '2024-09-12T06:58:17.292Z',
	restaurant: {
		name: 'The Pizza Guy',
		location: 'Banani, Dhaka',
	},
	mealItems: [
		{
			id: 'cm0yy24z6000158i0kryf20fj',
			name: 'Chicken Biriyani',
			quantity: '350 gm',
			mealId: 'cm0yxu7v000035x2jn4udwe8d',
			createdAt: '2024-09-12T07:04:26.801Z',
			updatedAt: '2024-09-12T07:04:26.801Z',
		},
		{
			id: 'cm0yy2mqg000358i0shzxwfaq',
			name: 'Kebab',
			quantity: '2 pieces',
			mealId: 'cm0yxu7v000035x2jn4udwe8d',
			createdAt: '2024-09-12T07:04:49.816Z',
			updatedAt: '2024-09-12T07:04:49.816Z',
		},
		{
			id: 'cm0yy2syt000558i0p6uwjeud',
			name: 'Salad',
			quantity: '1 pieces',
			mealId: 'cm0yxu7v000035x2jn4udwe8d',
			createdAt: '2024-09-12T07:04:57.894Z',
			updatedAt: '2024-09-12T07:04:57.894Z',
		},
	],
};

const FoodCard: FC<Props> = ({}) => {
	return (
		<Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
			<Image
				objectFit='cover'
				maxW={{ base: '100%', sm: '200px' }}
				src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
				alt='Caffe Latte'
			/>

			<Stack>
				<CardHeader>
					<Heading size='md'>{data?.name}</Heading>
					<Text>{`${data?.restaurant?.name} - ${data?.restaurant?.location}`}</Text>
				</CardHeader>
				<CardBody>
					<Flex mb={4}>
						<Tag colorScheme='blue'>{data.day}</Tag>
					</Flex>
					<Stack spacing={0}>
						<Text fontWeight={500}>Items</Text>
						<UnorderedList>
							{data.mealItems.map((item) => (
								<ListItem key={item.id}>
									{item.name} - {item.quantity}
								</ListItem>
							))}
						</UnorderedList>
					</Stack>
				</CardBody>

				<CardFooter>
					<Button
						leftIcon={<Icon as={FaRegThumbsUp} />}
						variant='solid'
						colorScheme='blue'
						size='sm'
					>
						Vote
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default FoodCard;
