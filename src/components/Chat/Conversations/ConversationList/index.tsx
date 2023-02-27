import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import SearchUsersModal from './SearchUsersModal';

type Props = {};

const ConversationList = (props: Props) => {
	return (
		<Box width="100%">
			<Box py="2" px="4" mb="4" bg="gray.900" borderRadius="4" cursor="pointer">
				<Text textAlign="center" color="white" fontWeight="500">
					Find or Start conversation
				</Text>
			</Box>
			<SearchUsersModal />
		</Box>
	);
};

export default ConversationList;
