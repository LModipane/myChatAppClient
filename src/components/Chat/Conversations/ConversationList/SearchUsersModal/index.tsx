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

const ConversationModal = ({ isOpen, onClose }: Props) => {
	const [searchedUsername, setSearchedUsername] = useState('');
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		/**
		 * this is where we will send the request to search for users to our apollo server
		 */
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

export default ConversationModal;
