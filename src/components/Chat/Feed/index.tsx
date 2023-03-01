import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

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
			{conversationId ? (
				<Flex>{`you are in conversation ${conversationId}`}</Flex>
			) : (
				<Flex>conversation feed</Flex>
			)}
		</Flex>
	);
};

export default Feed;
