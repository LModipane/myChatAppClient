import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

type Props = {};

const ConversationModal = (props: Props) => {
	return (
		<>
			<Modal>
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

export default ConversationModal;
