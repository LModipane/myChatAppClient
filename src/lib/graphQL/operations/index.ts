import { gql } from '@apollo/client';

const operations = {
	Query: {
		GET_MESSAGE_STRING: gql`
			query message {
				hello
			}
		`,
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
		POST_CONVERSATION_STRING: gql`
			mutation Mutation($addedUserIds: [String!]!) {
				createConversation(addedUserIds: $addedUserIds) {
					conversationId
				}
			}
		`,
	},
};

export default operations;
