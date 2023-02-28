import { SearchedUser } from '@/lib/@types/types';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

type Props = {
	addedUsers: Array<SearchedUser>;
	removeAddedUsers: (userId: string) => void;
};

const AddedUsersList = ({ addedUsers, removeAddedUsers }: Props) => {
	return (
		<Flex mt="8" gap="10px" flexWrap="wrap">
			{addedUsers.map(user => (
				<Stack
					key={user.id}
					direction="row"
					align="center"
					bg="whiteAlpha.200"
					borderRadius="4"
					p="2">
					<Text>{user.username}</Text>
					<IoIosCloseCircleOutline
						size="20"
						cursor="pointer"
						onClick={() => removeAddedUsers(user.id)}
					/>
				</Stack>
			))}
		</Flex>
	);
};

export default AddedUsersList;
