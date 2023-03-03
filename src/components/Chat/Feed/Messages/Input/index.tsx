import { Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
	conversationId: string;
};

const MessageInput = ({ conversationId }: Props) => {
	const [messageBody, setMessageBody] = useState('');
	return (
		<Box px="4" py="6" width="100%">
			<form onSubmit={() => {}}>
				<Input
                    type="text"
                    value={messageBody}
                    onChange={event => setMessageBody(event.target.value)}
                    size="md"
                    resize="none"
                    placeholder='enter message'
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
