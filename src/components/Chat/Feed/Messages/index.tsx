import { useQuery } from '@apollo/client';
import { Flex, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import messagesOperations from '@/lib/graphQL/operations/messages';
import {
	MessagesArgs,
	MessagesResponse,
	MessagesSubscriptionReponse,
} from '@/lib/@types/types';
import toast from 'react-hot-toast';
import SkeletonLoader from '@/components/Common/SkeletonLoader';
import MessageItem from './MessageItem';
import { useSession } from 'next-auth/react';

type Props = {
	conversationId: string;
};

const Messages = ({ conversationId }: Props) => {
	const { data: session } = useSession();
	if (!session) throw new Error(`not authenticated`);


	const { id: myUserId } = session.user;
	const { data, loading, subscribeToMore } = useQuery<
		MessagesResponse,
		MessagesArgs
	>(messagesOperations.Query.GET_MESSAGES_STRING, {
		variables: { conversationId },
		onError: ({ message }) => {
			toast.error(message);
		},
	});

	const subscribeToMoreMessages = (conversationId: string) => {
		subscribeToMore({
			document: messagesOperations.Subscription.SUBSCRIBE_MESSAGE_EVENTS,
			variables: { conversationId },
			updateQuery: (
				prev,
				{ subscriptionData }: MessagesSubscriptionReponse,
			) => {
				if (!subscriptionData.data) return prev;
				//add notification fetch
				console.log('from subscription: ', subscriptionData.data);
				const newMessage = subscriptionData.data.messageSent;
				return Object.assign({}, prev, {
					messages: [newMessage, ...prev.messages],
				});
			},
		});
	};

	useEffect(() => {
		subscribeToMoreMessages(conversationId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [conversationId]);


	return (
		<Flex
			flexDirection="column-reverse"
			gap="4"
			justify="flex-end"
			overflow="hidden"
			height="100%">
			{loading && <SkeletonLoader count={4} height="20px" width="100%" />}
			{data?.messages &&
				data.messages.map(message => (
					<MessageItem
						key={message.id}
						body={message.body}
						sentByMe={message.sender.id === myUserId}
						senderName={ message.sender.username || "NA"}
					/>
				))}
		</Flex>
	);
};

export default Messages;
