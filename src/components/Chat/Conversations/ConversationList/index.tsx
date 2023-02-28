import { Box, Text } from '@chakra-ui/react';
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
			{conversations.map(conversation => (
				<ConversationItem key={conversation.id} conversation={ conversation} />
			))}
		</Box>
	);
};

export default ConversationList;
