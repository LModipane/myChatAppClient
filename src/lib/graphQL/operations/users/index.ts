import { gql } from '@apollo/client';

const operations = {
	Query: {
		GET_OTHER_USERS_STRING: gql`
			query getUsers($searchedUsername: String!) {
				searchUsers(searchedUsername: $searchedUsername) {
					username
					id
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
		`,
	},
};

export default operations;
