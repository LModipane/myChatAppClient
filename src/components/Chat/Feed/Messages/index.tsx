import { useQuery } from '@apollo/client';
import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import messagesOperations from '@/lib/graphQL/operations/messages';
import { MessagesArgs, MessagesResponse } from '@/lib/@types/types';
import toast from 'react-hot-toast';
import SkeletonLoader from '@/components/Common/SkeletonLoader';
import MessageItem from './MessageItem';

type Props = {
	conversationId: string;
};

const Messages = ({ conversationId }: Props) => {
	const { data, loading, error, subscribeToMore } = useQuery<
		MessagesResponse,
		MessagesArgs
	>(messagesOperations.Query.GET_MESSAGES_STRING, {
		variables: { conversationId },
		onError: ({ message }) => {
			toast.error(message);
		},
	});
	if (error) toast.error('failed to load messages');

	console.log('Here are the messages:', data);
	return (
		<Flex flexDirection="column" gap="4" justify="flex-end" overflow="hidden">
			{loading && <SkeletonLoader count={4} height="20px" width="100%" />}
			{data?.messages &&
				data.messages.map(message => <MessageItem key={message.id} />)}
		</Flex>
	);
};

export default Messages;
