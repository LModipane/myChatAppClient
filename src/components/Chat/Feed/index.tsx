import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import FeedHeader from './Header';
import conversationOperations from '@/lib/graphQL/operations/conversations';
import { useQuery } from '@apollo/client';
import { ConversationsResponse } from '@/lib/@types/types';

type Props = {};

const Feed = (props: Props) => {
	const router = useRouter();
	const { conversationId } = router.query;
	return (
		<Flex
			display={{ base: conversationId ? 'flex' : 'none', md: 'flex' }}
			width="100%"
			border="1px solid red"
			direction="column">
			{typeof conversationId === 'string' && conversationId ? (
				<Flex
					direction="column"
					justify="space-between"
					overflow="hidden"
					flexGrow="1"
					border="1px solid red">
					<FeedHeader conversationId={conversationId} />
				</Flex>
			) : (
				<Flex>Select conversation</Flex>
			)}
		</Flex>
	);
};

export default Feed;
