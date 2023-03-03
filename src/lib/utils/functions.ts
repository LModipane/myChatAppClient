import { AddedUser } from '../../../../apollo-server/src/lib/@types/resolversTypes';

export const formatUsernames = (
	addedUsers: Array<AddedUser>,
	myUserId: string,
): string => {
	const usernames = addedUsers
		.filter(participant => participant.user.id != myUserId)
		.map(participant => participant.user.username);

	return usernames.join(', ');
};
