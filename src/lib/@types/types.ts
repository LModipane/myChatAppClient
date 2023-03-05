import type {
	Conversation,
	PopulatedMessage,
} from '../../../../apollo-server/src/lib/@types/resolversTypes';

export type SubmitUsernameResponse = {
	submitUsername: {
		success: boolean;
		message: string;
	};
};

export type SubmitUsernameArgs = {
	username: string;
};

export type SearchUsersResponse = {
	searchUsers: [SearchedUser];
};

export type SearchedUser = {
	id: string;
	username: string;
};

export type SearchedUsersArs = {
	searchedUsername: string;
};

export type CreateConversationResponse = {
	createConversation: {
		conversationId: string;
	};
};

export type CreateConversationArgs = {
	addedUserIds: string[];
};

export type ConversationsResponse = {
	conversations: Conversation[];
};

export type ConversationsSubscriptionResponse = {
	subscriptionData: { data: { conversationCreated: Conversation } };
};

export type MessagesResponse = {
	messages: PopulatedMessage[];
};

export type MessagesArgs = {
	conversationId: string;
};

export type sendMessageResponse = {
	sendMessage: boolean;
};

export type sendMessageArgs = {
	senderId: string;
	conversationId: string;
	body: string;
};

export type MessagesSubscriptionReponse = {
	subscriptionData: { data: { messageSent: PopulatedMessage } };
};
