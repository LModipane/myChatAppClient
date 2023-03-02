import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Conversation } from '../../../../../../../apollo-server/src/lib/@types/resolversTypes';
import { GoPrimitiveDot } from 'react-icons/go';
import { formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';

type Props = {
	conversation: Conversation;
	onClick: () => void;
	isSelected: boolean;
};

const formatRelativeLocale = {
	lastWeek: 'eeee',
	yesterday: "'Yesterday",
	today: 'p',
	other: 'MM/dd/yy',
};

const ConversationItem = ({ conversation, onClick, isSelected }: Props) => {
	const hasSeenLatestMessage = true;
	return (
		<Stack
			onClick={onClick}
			my="1"
			direction="row"
			align="center"
			justifyContent="space-between"
			p="4"
			cursor="pointer"
			borderRadius="4"
			bg={isSelected ? 'whiteAlpha.200' : 'none'}
			_hover={{ bg: 'whiteAlpha.200' }}
			position="relative">
			<Flex position="absolute" left="-3px">
				{hasSeenLatestMessage || (
					<GoPrimitiveDot fontSize="18" color="#6B46C1" />
				)}
			</Flex>
			<Avatar />
			<Flex justify="space-between" width="80%" height="100%">
				<Flex direction="column" width="70%" height="100%">
					<Text
						fontWeight="600"
						whiteSpace="nowrap"
						overflow="hidden"
						textOverflow="ellpsis">
						{conversation.id}
					</Text>
				</Flex>
				<Text
					color="whiteAlpha.700"
					textAlign="right"
					position="absolute"
					right={4}>
					{/* {formatRelative (new Date(conversation.updateAt), new Date(), {
						locale: {
							...enUS,
							formatRelative: token =>
								formatRelativeLocale[
									token as keyof typeof formatRelativeLocale
								],
						},//do research on date-fn for
					})} */}
				</Text>
			</Flex>
		</Stack>
	);
};

export default ConversationItem;
