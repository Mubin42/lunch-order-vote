import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Navbar from '../navbar/Navbar';

type Props = {
	children: React.ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
	return (
		<Flex w='100vw' height='100vh' justify='center' bg='whitesmoke'>
			<Flex w='1280px' bg='white' flexDirection='column' gap={8} overflowY='scroll'>
				<Navbar />
				{children}
			</Flex>
		</Flex>
	);
};

export default PageLayout;
