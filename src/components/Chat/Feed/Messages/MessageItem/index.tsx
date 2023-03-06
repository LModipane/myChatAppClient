import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import { formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';
import React from 'react';
import { PopulatedMessage } from '../../../../../../../apollo-server/src/lib/@types/resolversTypes';

type Props = {
	message: PopulatedMessage;
	sentByMyUser: boolean;
};

const formatRelativeLocale = {
	lastWeek: "eeee 'a' p",
	yesterday: "'Yesterday at' p",
	today: 'p',
	other: 'MM/dd/yy',
};

const MessageItem = ({ message, sentByMyUser }: Props) => {
	return (
		<Stack
			direction="row"
			p="4"
			spacing="4"
			_hover={{ bg: 'whiteAlpha.200' }}
			justify={sentByMyUser ? 'flex-end' : 'flex-start'}
			wordBreak="break-word">
			{!sentByMyUser && (
				<Flex align="flex-end">
					<Avatar size="sm" />
				</Flex>
			)}
			<Stack spacing="1" width="100%">
				<Stack
					direction="row"
					align="center"
					justify={sentByMyUser ? 'flex-end' : 'flex-start'}>
					{!sentByMyUser && (
						<Text fontWeight="500" textAlign="left">
							{message.sender.username}
						</Text>
					)}
					<Text fontSize="14" color="whiteAlpha.700">
						{formatRelative(message.createAt, new Date(), {
							locale: {
								...enUS,
								formatRelative: token =>
									formatRelativeLocale[
										token as keyof typeof formatRelativeLocale
									],
							},
						})}
					</Text>
				</Stack>
				<Flex justify={sentByMyUser ? 'flex-end' : 'flex-start'}>
					<Box
						px="2"
						py="1"
						borderRadius="12"
						maxWidth="65%"
						bg={sentByMyUser ? 'brand.100' : 'whiteAlpha.300'}>
						<Text>{message.body}</Text>
					</Box>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default MessageItem;
