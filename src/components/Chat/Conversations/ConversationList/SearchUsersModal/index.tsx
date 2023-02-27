import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const SearchUsersModal = ({ isOpen, onClose }: Props) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				{/** look here */}
				<ModalOverlay />
				<ModalContent bg="whiteAlpha.100" pb="4" color="white">
					<ModalHeader>search for other users</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SearchUsersModal;
