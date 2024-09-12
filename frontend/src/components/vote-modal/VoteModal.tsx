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
import { FC, useEffect, useState } from 'react';
import { Meal } from '@/store/services/ServiceTypes';
import { useCreateVoteMutation, useGetEmployeesQuery } from '@/store/services/mainApi';
import useCustomToast from '@/hooks/useCustomToast';

type Props = {
	children: React.ReactNode;
	meal?: Meal;
};

const VoteModal: FC<Props> = ({ children, meal }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// Fetch all employees
	const { data } = useGetEmployeesQuery();

	// State for input fields
	const [employeeId, setEmployeeId] = useState<string>('');
	const [newEmployeeName, setNewEmployeeName] = useState<string>('');

	// API calls to create a vote
	const [createVote, result] = useCreateVoteMutation();

	useCustomToast({
		result,
		successMessage: 'Vote submitted successfully!',
		errorMessage: 'Failed to submit vote.',
	});

	// Submit vote
	const handleSubmit = () => {
		const body = {
			mealId: meal?.id || '',
			employeeId,
			newEmployeeName,
		};

		createVote(body);
	};

	useEffect(() => {
		if (result.isSuccess) {
			onClose();
			setEmployeeId('');
			setNewEmployeeName('');
		}
	}, [result.isSuccess, onClose]);

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>

			<Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset='scale'>
				<ModalOverlay />
				<ModalContent minH={{ base: '100vh', lg: 'auto' }}>
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
												<option
													key={employee.id}
													value={employee.id}
													disabled={meal?.votes.some((vote) => vote.employee.id === employee.id)}
												>
													{meal?.votes.some((vote) => vote.employee.id === employee.id)
														? `${employee.name} - Already Voted`
														: employee.name}
												</option>
											))}
										</Select>
									</FormControl>
								</TabPanel>
								<TabPanel>
									<FormControl>
										<FormLabel>Employee Name</FormLabel>
										<Input
											value={newEmployeeName}
											onChange={(e) => setNewEmployeeName(e.target.value)}
											placeholder='Name'
										/>
									</FormControl>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button colorScheme='blue' onClick={handleSubmit} isLoading={result.isLoading}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default VoteModal;
