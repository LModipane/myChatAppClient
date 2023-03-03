import { gql } from '@apollo/client';

export const messageFields = `
    id
    sender {
        id
        username
    }
    body
    createAt
`;

const operations = {
	Query: {
		GET_MESSAGES_STRING: gql`
        query Messages ($conversationId: String!){
            messages(conversationId: $conversationId){
                ${messageFields}
            }
        }
        `,
	},
	Mutation: {
		POST_MESSAGE_STRING: gql`
            mutation SendMessage($messageId: ID!, $conversationId: ID!, $senderId: ID!, $body: String!){
                sendMessage(messageId: $messageId, conversationId: $conversationId, senderId: $senderId, body: $body)
            }
        `,
	},
    Subscription: {
        SUBSCRIBE_MESSAGE_EVENTS: gql`
            subscription MessageSent($conversationId: String!){
                messageSent(conversationId: $conversationId) {
                    ${messageFields}
                }
            }
        `
    },
};

export default operations;
