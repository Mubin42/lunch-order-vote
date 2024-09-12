import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

type ToastProps = {
	result: { isSuccess: boolean; isError: boolean; error?: any };
	successMessage: string;
	successDescription?: string;
	errorMessage?: string;
	errorDescription?: string;
};

/**
 * Custom hook to display toast notifications based on the result of an operation.
 *
 * @param {Object} result - The result object containing the status of the operation.
 * @param {boolean} result.isSuccess - Indicates if the operation was successful.
 * @param {boolean} result.isError - Indicates if there was an error in the operation.
 * @param {any} [result.error] - The error object if the operation failed.
 * @param {string} successMessage - The message to display when the operation is successful.
 * @param {string} [successDescription='Operation Successful'] - The description to display when the operation is successful.
 * @param {string} [errorMessage='An Error Occurred'] - The message to display when the operation fails.
 * @param {string} [errorDescription] - The description to display when the operation fails.
 *
 * @example
 * const result = { isSuccess: true, isError: false };
 * useCustomToast({
 *   result,
 *   successMessage: 'Data saved successfully!',
 *   errorMessage: 'Failed to save data.',
 * });
 */
const useCustomToast = ({
	result,
	successMessage,
	successDescription = 'Operation Successful',
	errorMessage = 'An Error Occurred',
	errorDescription,
}: ToastProps) => {
	const toast = useToast({
		position: 'bottom-right',
		variant: 'left-accent',
		isClosable: true,
		duration: 3000,
	});

	useEffect(() => {
		if (result.isSuccess) {
			toast({
				title: successMessage,
				description: successDescription,
				status: 'success',
			});
		} else if (result.isError) {
			console.error('Error', result.error);
			toast({
				title: errorMessage,
				status: 'error',
				description: errorDescription || result.error?.message,
			});
		}
	}, [result]);
};

export default useCustomToast;
