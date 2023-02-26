import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
	uri: 'http://localhost:4000/graphql', //here is the endpoints to our graphql server
	credentials: 'include', //this prop will allow the client to send sessions to the client
}); //this object will create http requests to our server so that we can send query/mutation request

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(), //this prop will cacche our response so that we it wont perform unnecessary requests
}); //this object will send request to our apollo server

export default apolloClient;
