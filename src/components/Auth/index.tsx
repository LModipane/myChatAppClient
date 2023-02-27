import React from 'react';
import { Center, Stack } from '@chakra-ui/react';
import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import CreateUsername from './CreateUsername';
import SignIn from './SignIn';

type Props = {
	session: Session;
};

const Auth = () => {
	const { data: session } = useSession();
	return (
		<Center height="100vh">{session ? <CreateUsername /> : <SignIn />}</Center>
	);
}; //this component is responsible for authentication our user then allow them to create their username

export default Auth;
