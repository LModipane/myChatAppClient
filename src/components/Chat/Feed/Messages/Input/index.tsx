import { Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
	conversationId: string;
};

const MessageInput = ({ conversationId }: Props) => {
	const [messageBody, setMessageBody] = useState('');
	const sendMessage = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			/**
			 * send the message
			 */
		} catch (error) {
			console.error("sendMessage error: ", error);
			toast.error('failed to send message');
		}
	};
	return (
		<Box px="4" py="6" width="100%">
			<form onSubmit={event => sendMessage(event)}>
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
