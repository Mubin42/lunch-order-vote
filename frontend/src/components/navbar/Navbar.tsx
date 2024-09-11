import { BASE_PADDING } from '@/lib/constants';
import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {};

const Navbar: FC<Props> = ({}) => {
	return (
		<Flex
			flex={1}
			h={{ base: '48px', lg: '64px' }}
			bgColor='blue.300'
			align='center'
			px={BASE_PADDING}
		>
			<Heading fontSize={{ base: '1.5rem', lg: '2rem' }} fontWeight='600'>
				Food Order BD
			</Heading>
		</Flex>
	);
};

export default Navbar;
