import { Flex } from '@chakra-ui/react';
import React from 'react';
import Conversations from './conversations';
import Feed from './feed';

type Props = {};

const Chat = (props: Props) => {
	return (
		<Flex height="100vh">
			<Conversations />
			<Feed />
		</Flex>
	);
};

export default Chat;
