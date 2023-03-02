import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Conversation } from '../../../../../../apollo-server/src/lib/@types/resolversTypes';
import ConversationItem from './ConversationItem';
import ConversationModal from './SearchUsersModal';

type Props = {
	conversations: Conversation[];
};

const ConversationList = ({ conversations }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	const router = useRouter();
	const viewConversation = (conversationId: string) => {
		/**
		 * Push conversation id to router query
		 */
		router.push({ query: { conversationId } });
	};
	const { conversationId } = router.query
	return (
		<Box width="100%">
			<Box
				py="2"
				px="4"
				mb="4"
				bg="gray.900"
				borderRadius="4"
				cursor="pointer"
				onClick={() => {
					onOpen();
				}}>
				<Text textAlign="center" color="white" fontWeight="500">
					Find or Start conversation
				</Text>
			</Box>
			<ConversationModal onClose={onClose} isOpen={isOpen} />
			{typeof conversationId === "string" && conversations.map(conversation => (
				<ConversationItem
					key={conversation.id}
					conversation={conversation}
					onClick={() => viewConversation(conversation.id)}
					isSelected={conversation.id === conversationId}
				/>
			))}
		</Box>
	);
};

export default ConversationList;
