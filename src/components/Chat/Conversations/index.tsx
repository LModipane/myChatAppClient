import { Box } from '@chakra-ui/react';
import React from 'react';
import ConversationList from './ConversationList';

type Props = {};

const Conversations = (props: Props) => {
	return (
		<Box
			width={{ base: '100%', md: '400px' }}
			className="conversations-wrapper"
			bg="gray.700"
			py="6"
			px="3">
			{/* Skelenton loader */}
			<ConversationList />
		</Box>
	);
};

export default Conversations;
