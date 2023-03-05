import { sendMessageArgs, sendMessageResponse } from '@/lib/@types/types';
import messageOperations from '@/lib/graphQL/operations/messages';
import { useMutation } from '@apollo/client';
import { Box, Input } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
	conversationId: string;
};

const MessageInput = ({ conversationId }: Props) => {
	const [messageBody, setMessageBody] = useState('');
	const [sendMessage] = useMutation<sendMessageResponse, sendMessageArgs>(
		messageOperations.Mutation.POST_MESSAGE_STRING,
	);

	const { data: session } = useSession();
	if (!session) throw new Error('not authorised');
	const { id: senderId } = session.user;
	const newMessage: sendMessageArgs = {
		senderId,
		conversationId,
		body: messageBody,
	};

	const onSendMessage = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			await sendMessage({ variables: { ...newMessage } });
		} catch (error) {
			console.log('Opps, onSendMessage error: ', error);
			toast.error('failed to send message');
		}
	};
	return (
		<Box px="4" py="6" width="100%">
			<form onSubmit={event => onSendMessage(event)}>
				<Input
					type="text"
					value={messageBody}
					onChange={event => setMessageBody(event.target.value)}
					size="md"
					resize="none"
					placeholder="enter message"
					_focus={{
						boxShadow: 'none',
						border: '1px solid',
						borderColor: 'whiteAlpha.300',
					}}
				/>
			</form>
		</Box>
	);
};

export default MessageInput;
