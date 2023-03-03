import { ConversationsResponse } from '@/lib/@types/types';
import { formatUsernames } from '@/lib/utils/functions';
import { useQuery } from '@apollo/client';
import { Button, Stack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Conversation } from '../../../../../../apollo-server/src/lib/@types/resolversTypes';
import conversationOperations from "@/lib/graphQL/operations/conversations"
import { toast } from 'react-hot-toast';
type Props = {
    conversationId: string;
};

const FeedHeader = ({ conversationId}: Props) => {
    const router = useRouter();

    const { data: session } = useSession();
    if (!session) throw new Error("Please sign in")
    
    const { data, loading, error } = useQuery<ConversationsResponse>(
			conversationOperations.Query.GET_CONVERSATION_STRING,
    );
    if (error) toast.error("header couldn't fetch conversation data")
    
	const conversation = data?.conversations.find(
		conversation => conversation.id === conversationId,
	);

    const { id: userId } = session?.user;
	return (
		<Stack
			direction="row"
			align="center"
			spacing="6"
			py="5"
			px={{ base: '4', md: '0' }}
			borderBottom="1px solid"
			borderColor="whiteAlpha.200">
			<Button
				bg="none"
				display={{ md: 'none' }}
				fontSize="22"
				onClick={() =>
					router.replace('?/conversationId', '/', { shallow: true })
				}>
				<BiArrowBack />
			</Button>
			{conversation && (
				<Stack direction="row">
					<Text color="whiteAlpha.600">To: </Text>
					<Text fontWeight={600}>
						{!!userId && formatUsernames(conversation.addedUsers, userId as string)}
					</Text>
				</Stack>
			)}
		</Stack>
	);
};

export default FeedHeader;
