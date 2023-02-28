import { gql } from '@apollo/client';

const conversationFields = `
    id
    addedUsers {
        user {
            id
            username
        }
        hasSeenLatestMessage
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
		GET_CONVERSATION_STRING: gql`
			query ExampleQuery {
				conversations {
					${conversationFields}
				}
			}
		`,
	},
	Mutation: {
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
