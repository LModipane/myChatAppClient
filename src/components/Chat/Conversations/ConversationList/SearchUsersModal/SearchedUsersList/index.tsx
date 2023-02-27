import { Avatar, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { SearchedUser } from '@/lib/@types/types';
import React from 'react';

type Props = {
	searchedUsers: Array<SearchedUser>;
	addUser: (user: SearchedUser) => void;
};

const SearchedUsersList = ({ searchedUsers, addUser }: Props) => {
	return (
		<>
			{searchedUsers.length === 0 ? (
				<Flex>
					<Text>no users found</Text>
				</Flex>
			) : (
				<Stack>
					{searchedUsers.map(user => {
						return (
							<Stack
								key={user.id}
								direction="row"
								align="center"
								spacing="4"
								py="2"
								px="4"
								borderRadius="4"
								_hover={{ bg: 'whiteAlpha.200' }}>
								<Avatar src="" />
								<Flex justify="space-between" width="100%" align="center">
									<Text>{user.username}</Text>
									<Button
										bg="blue.400"
										_hover={{ bg: 'blue.400' }}
										onClick={event => addUser(user)}>
										add
									</Button>
								</Flex>
							</Stack>
						);
					})}
				</Stack>
			)}
		</>
	);
};

export default SearchedUsersList;
