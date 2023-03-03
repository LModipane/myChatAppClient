import { gql } from '@apollo/client';
import { messageFields } from '../messages';


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
        ${messageFields}
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
    Subscription: {
        SUBSCRIBE_TO_NEW_CONVERSATIONS_STRING: gql`
            subscription ConversationCreated {
                conversationCreated {
                    ${conversationFields}
                }
            }
        `
    }
};

export default operations;
