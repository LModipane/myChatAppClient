import 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: User;
	}

	interface User {
		id: string;
		username: string;
	}
} //these types will be combined with the exissting User and Session interfaces rather than replacing them
