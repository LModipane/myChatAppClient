import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { getSession } from 'next-auth/react';

const httpLink = new HttpLink({
	uri: 'http://localhost:4000/graphql', //here is the endpoints to our graphql server
	credentials: 'include', //this prop will allow the client to send sessions to the client
}); //this object will create http requests to our server so that we can send query/mutation request

const wsLink =
	typeof window !== 'undefined'
		? new GraphQLWsLink(
				createClient({
					url: 'ws://localhost:4000/graphql/subscriptions',
					connectionParams: async () => ({
						session: await getSession,
					}),//this is what i want to pass to subscriptions resolver context 
				}),
		  )
		: null;

const link =
	typeof window !== 'undefined' && wsLink !== null
		? split(
				({ query }) => {
					const definition = getMainDefinition(query);
					return (
						definition.kind === 'OperationDefinition' &&
						definition.operation === 'subscription'
					);
				},
				wsLink,
				httpLink,
		  )
		: httpLink;

const apolloClient = new ApolloClient({
	link,
	connectToDevTools: process.env.NODE_ENV !== 'production',
	queryDeduplication: true,
	cache: new InMemoryCache(), //this prop will cacche our response so that we it wont perform unnecessary requests
}); //this object will send request to our apollo server

export default apolloClient;
