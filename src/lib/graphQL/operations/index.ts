import { gql } from '@apollo/client';

const operations = {
	Query: {
		GET_MESSAGE_STRING: gql`
			query message {
				hello
			}
		`,
		GET_OTHER_USERS_STRING: gql`
			query getSearchedUsers($searchedUsername: string!) {
				searchForUsers(searchedUsername: $searchedUsername) {
					id
					username
				}
			}
		`,
	},
	Mutation: {
		POST_USERNAME_STRING: gql`
			mutation updateUsername($username: String!) {
				submitUsername(username: $username) {
					success
					message
				}
			}
		`, //look here
	},
};

export default operations;
