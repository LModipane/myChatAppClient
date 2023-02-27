export type SubmitUsernameResponse = {
	submitUsername: {
		success: boolean;
		message: string;
	};
};

export type SubmitUsernameArgs = {
	username: string;
};

		
export type SearchUsersResponse = {
	searchUsers: [SearchedUser]
};

export type SearchedUser = {
	id: string,
	username: string,
}

export type SearchedForUsersArs = {
	searchedUsername: string,
}