import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Conversation } from '../../../../../../../apollo-server/src/lib/@types/resolversTypes';

type Props = {
	conversation: Conversation;
};

const ConversationItem = ({ conversation }: Props) => {
	return (
		<Stack p="4" _hover={{ bg: 'whiteAlpha.200' }} borderRadius="4">
			<Text>{conversation.id}</Text>
		</Stack>
	);
};

export default ConversationItem;
