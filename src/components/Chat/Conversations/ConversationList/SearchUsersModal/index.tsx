import { useLazyQuery } from '@apollo/client';
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react';
import {
	SearchedUser,
	SearchedUsersArs,
	SearchUsersResponse,
} from '@/lib/@types/types';
import operations from '@/lib/graphQL/operations';
import { useState } from 'react';
import SearchedUsersList from './SearchedUsersList';
import AddedUsersList from './AddedUsersList';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const SearchUsersModal = ({ isOpen, onClose }: Props) => {
	const [searchedUsername, setSearchedUsername] = useState('');

	const [addedUsers, setAddedUsers] = useState<Array<SearchedUser>>([]);

	const [searchForUsers, { data: searcedResult, loading }] = useLazyQuery<
		SearchUsersResponse,
		SearchedUsersArs
	>(operations.Query.GET_OTHER_USERS_STRING); //we don need to make the query when the page loads rather we want to make the query in the handle submit method

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		searchForUsers({ variables: { searchedUsername } });
	};

	const addUser = (user: SearchedUser) => {
		setAddedUsers(preAddedUsers => [...preAddedUsers, user]);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="whiteAlpha.100" pb="4" color="white">
					<ModalHeader>search for other users</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<Stack>
								<Input
									placeholder="search for username"
									value={searchedUsername}
									onChange={event => setSearchedUsername(event.target.value)}
									type="text"
								/>
								<Button
									type="submit"
									bg="whiteAlpha.100"
									isDisabled={!searchedUsername}>
									search
								</Button>
							</Stack>
						</form>
						{searcedResult && (
							<SearchedUsersList
								searchedUsers={searcedResult.searchUsers}
								addUser={addUser}
							/>
						)}
						{addedUsers.length !== 0 && (
							<>
								<AddedUsersList />
								<Button
									bg="brand.100"
									width="100%"
									mt="6"
									_hover={{ bg: 'brand.100' }}>
									Start chats
								</Button>
							</> //look here
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SearchUsersModal;
