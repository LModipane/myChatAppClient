import { SearchedForUsersArs, SearchUsersResponse } from '@/lib/@types/types';
import operations from '@/lib/graphQL/operations';
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
import { useState } from 'react';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const SearchUsersModal = ({ isOpen, onClose }: Props) => {
	const [searchedUsername, setSearchedUsername] = useState('');
	
	const [searchForUsers, { data: searcedResult, loading }] = useLazyQuery<
		SearchUsersResponse,
		SearchedForUsersArs
	>(operations.Query.GET_OTHER_USERS_STRING); //we dont need to make the query when the page loads rather we want to make the query in the handle submit method so we will use the uselazyquery hook so that we can use the handler function in the handle submit method

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		searchForUsers({ variables: { searchedUsername } });
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
							{/**look here*/}
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
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SearchUsersModal;
