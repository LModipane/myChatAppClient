import { gql } from '@apollo/client';

const conversationFields = `
    id
	addedUsers {
		user {
			id
			username
		}
		hasSeenLastestMessage
	}
	latestMessage {
		id
		sender {
			id
			username
		}
		body
		createAt
	}
	updatedAt
`;

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
		GET_CONVERSATION_STRING: gql`
			query GetConversations {
				getConversations {
					${conversationFields}
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
