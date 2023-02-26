import React from 'react';
import { Stack, Text, Button, Image } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

type Props = {};

const SignIn = (props: Props) => {
	return (
		<Stack align="center" spacing="5">
			<Text fontSize="3xl">mychatapp</Text>
			<Button
				onClick={() => signIn('google')}
				leftIcon={<Image src="./google.svg" alt="google-logo" height="25px" />}>
				please sign in with google
			</Button>
		</Stack>
	);
};

export default SignIn;
