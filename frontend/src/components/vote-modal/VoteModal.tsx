import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useDisclosure,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Meal } from '@/store/services/ServiceTypes';
import { useGetEmployeesQuery } from '@/store/services/mainApi';

type Props = {
	children: React.ReactNode;
	meal?: Meal;
};

const VoteModal: FC<Props> = ({ children, meal }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { data } = useGetEmployeesQuery();

	const [employeeId, setEmployeeId] = useState<string>('');

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>

			<Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset='scale'>
				<ModalOverlay />
				<ModalContent minH={{ base: '100vh', lg: '400px' }}>
					<ModalHeader>Vote for {meal?.name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Tabs>
							<TabList>
								<Tab flex={1}>Existing Employee</Tab>
								<Tab flex={1}>New Employee</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<FormControl>
										<FormLabel>Select Employee</FormLabel>
										<Select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
											{data?.data.map((employee) => (
												<option key={employee.id} value={employee.id}>
													{employee.name}
												</option>
											))}
										</Select>
									</FormControl>
								</TabPanel>
								<TabPanel>
									<FormControl>
										<FormLabel>First name</FormLabel>
										<Input placeholder='First name' />
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Last name</FormLabel>
										<Input placeholder='Last name' />
									</FormControl>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button colorScheme='blue'>Submit</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default VoteModal;
