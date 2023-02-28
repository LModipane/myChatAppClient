import { ConversationsResponse } from '@/lib/@types/types';
import operations from '@/lib/graphQL/operations/conversations';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import ConversationList from './ConversationList';

type Props = {};

const Conversations = (props: Props) => {
	const {
		loading,
		data: conservationsData,
		error,
	} = useQuery<ConversationsResponse>(operations.Query.GET_CONVERSATION_STRING);
	if(error) toast.error("failed to fetch Conversation")
	return (
		<Box
			width={{ base: '100%', md: '400px' }}
			className="conversations-wrapper"
			bg="gray.700"
			py="6"
			px="3">
			{/* Skelenton loader */}
			<ConversationList
				conversations={conservationsData?.conversations || []}
			/>
		</Box>
	);
};

export default Conversations;
