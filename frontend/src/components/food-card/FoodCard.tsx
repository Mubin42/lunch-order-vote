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
import VoteModal from '../vote-modal/VoteModal';
import { LuCrown } from 'react-icons/lu';
import { IMAGE } from '@/lib/constants';

type Props = {
	data?: Meal;
	isWinner?: boolean;
};

const FoodCard: FC<Props> = ({ data, isWinner = false }) => {
	const image = (
		<Image
			objectFit='cover'
			maxW={{ base: '100%', sm: '200px' }}
			src={IMAGE.foodImage}
			alt='Caffe Latte'
		/>
	);

	const cardStack = (
		<Stack>
			<CardHeader>
				<Heading size='md'>{data?.name}</Heading>
				<Text>{`${data?.restaurant?.name} - ${data?.restaurant?.location}`}</Text>
			</CardHeader>
			<CardBody>
				<Flex mb={4} gap={2}>
					<Tag colorScheme='gray'>{data?.day}</Tag>
					<Tag colorScheme='blue' variant='outline' gap={1}>
						<Icon as={FaRegThumbsUp} />
						{data?.votes?.length || 0} Votes
					</Tag>
				</Flex>
				<Stack spacing={0}>
					<Text fontWeight={500}>Items</Text>
					<UnorderedList>
						{data?.mealItems.map((item) => (
							<ListItem key={item.id}>
								{item.name} - {item.quantity}
							</ListItem>
						))}
					</UnorderedList>
				</Stack>
			</CardBody>

			<CardFooter>
				<VoteModal meal={data}>
					<Button
						leftIcon={<Icon as={FaRegThumbsUp} />}
						variant='solid'
						colorScheme='blue'
						size='sm'
					>
						Vote
					</Button>
				</VoteModal>
			</CardFooter>
		</Stack>
	);

	return (
		<>
			{isWinner ? (
				<Stack px={10} py={5} bg='blue.50'>
					<Flex gap={2} align='center'>
						<Text fontSize='2rem' fontWeight={500}>
							Winner
						</Text>
						<Icon as={LuCrown} boxSize={8} />
					</Flex>
					<Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
						{image}
						{cardStack}
					</Card>
				</Stack>
			) : (
				<Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
					{image}
					{cardStack}
				</Card>
			)}
		</>
	);
};

export default FoodCard;
