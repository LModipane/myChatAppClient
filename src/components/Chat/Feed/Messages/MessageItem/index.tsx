import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
	body: string;
	sentByMe: boolean;
	senderName: string;
};

const MessageItem = ({ body, sentByMe, senderName }: Props) => {
  console.log(sentByMe)
	return (
		<Stack
			direction="row"
			p="4"
			spacing="4"
			_hover={{ bg: 'whiteAlpha.200' }}
			// justify={{}}
		>
			{!sentByMe && (
				<Flex align="flex-end">
					<Avatar size="sm" />
				</Flex>
			)}
			<Stack spacing="1" width="100%">
				<Stack direction="row" align="center">
					{!sentByMe && <Text>{senderName}</Text>}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default MessageItem;
