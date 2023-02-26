import { getSession, useSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import type { Session } from 'next-auth';
import { Box } from '@chakra-ui/react';
import { Chat, Auth } from '../components';
import { useQuery } from '@apollo/client';

type Props = {
	session: Session;
};

export default function Home() {
	const { data: session } = useSession();
	return <Box>{session?.user?.username ? <Chat /> : <Auth />}</Box>;
}

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);
	return {
		props: {
			session,
		},
	};
}
