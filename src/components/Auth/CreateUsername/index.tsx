import React, { useState } from 'react';
import { Stack, Text, Input, Button } from '@chakra-ui/react';
import UsersOperations from '../../../lib/graphQL/operations/users';
import { useMutation } from '@apollo/client';
import { SubmitUsernameResponse, SubmitUsernameArgs } from '@/lib/@types/types';
import toast from 'react-hot-toast';

type Props = {};

const CreateUsername = (props: Props) => {
	const [username, setUsername] = useState('');

	const [submitUsername, { loading }] = useMutation<
		SubmitUsernameResponse,
		SubmitUsernameArgs
	>(UsersOperations.Mutation.POST_USERNAME_STRING);

	const reloadSession = async () => {
		const event = new Event('visibilitychange');
		document.dispatchEvent(event);
	}; //this function will reload the session

	const handleSubmit = async () => {
		if (!username) return;
		try {
			const { data } = await submitUsername({ variables: { username } });
			if (!data?.submitUsername) throw new Error('Submition faild');
			const { success, message } = data.submitUsername;
			if (!success) throw new Error(message);
			toast.success(message);
			reloadSession();
		} catch (error: any) {
			toast.error(error.message);
			console.log(error);
		}
	};

	return (
		<Stack spacing="8">
			<Text fontSize="3xl">create your username</Text>
			<Input
				placeholder="enter user name"
				type="text"
				value={username}
				onChange={event => setUsername(event.target.value)}
			/>
			<Button width="100%" onClick={handleSubmit} isLoading={loading}>
				Submit
			</Button>
		</Stack>
	);
};

export default CreateUsername;
