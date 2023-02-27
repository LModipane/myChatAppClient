import type { AppProps } from 'next/app';
import { theme } from '../lib/chakra/theme';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import apolloClient from '../lib/graphQL/apolloClient';
import { Toaster } from 'react-hot-toast';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ChakraProvider theme={theme}>
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
					<Toaster />
				</ApolloProvider>
			</ChakraProvider>
		</SessionProvider>
	);
}
