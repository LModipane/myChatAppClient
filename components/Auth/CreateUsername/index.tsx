import React, { useState } from 'react';
import { Stack, Text, Input, Button } from '@chakra-ui/react';

type Props = {};

const CreateUsername = (props: Props) => {
	const [username, setUsername] = useState('');

	return (
		<Stack spacing="8">
			<Text fontSize="3xl">create your username</Text>
			<Input
				placeholder="enter user name"
				type="text"
				value={username} //look here
				onChange={event => setUsername(event.target.value)} //look here
			/>
			<Button width="100%">Submit</Button>
		</Stack>
	);
};

export default CreateUsername;
