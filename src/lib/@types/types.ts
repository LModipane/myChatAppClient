export type SubmitUsernameResponse = {
	submitUsername: {
		success: boolean;
		message: string;
	};
};

export type SubmitUsernameArgs = {
	username: string;
};
