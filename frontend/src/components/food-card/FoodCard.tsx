import { Meal } from '@/store/services/ServiceTypes';
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

type Props = {
	data: Meal;
};

const FoodCard: FC<Props> = ({ data }) => {
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
