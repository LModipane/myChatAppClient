import SkeletonLoader from '@/components/Common/SkeletonLoader';
import {
	ConversationsResponse,
	SubscriptionResponse
} from '@/lib/@types/types';
import operations from '@/lib/graphQL/operations/conversations';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ConversationList from './ConversationList';

type Props = {};

const Conversations = (props: Props) => {
	const {
		loading,
		data: conservationsData,
		error,
		subscribeToMore,
	} = useQuery<ConversationsResponse>(operations.Query.GET_CONVERSATION_STRING);
	if (error) toast.error('failed to fetch Conversation');

	const subscribeToNewConversations = () => {
		subscribeToMore({
			document: operations.Subscription.SUBSCRIBE_TO_NEW_CONVERSATIONS_STRING,
			updateQuery: (prev, { subscriptionData }: SubscriptionResponse) => {
				if (!subscriptionData.data) return prev;

				const newConversation = subscriptionData.data.conversationCreated;

				return Object.assign({}, prev, {
					conversations: [newConversation, ...prev.conversations],
				});
			},
		});
	};

	useEffect(() => {
		subscribeToNewConversations();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const router = useRouter();
	const { conversationId } = router.query;

	return (
		<Box
			display={{ base: conversationId ? 'none' : 'flex', md: 'flex' }}
			width={{ base: '100%', md: '400px' }}
			className="conversations-wrapper"
			bg="gray.700"
			py="6"
			flexDirection="column"
			gap="5"
			px="3">
			{loading ? (
				<SkeletonLoader count={10} height="70px" width="100%" />
			) : (
				<ConversationList
					conversations={conservationsData?.conversations || []}
				/>
			)}
		</Box>
	);
};

export default Conversations;
