import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prismadb';

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, user }) {
			return { ...session, user: { ...session.user, ...user } }; //i want the data from the database be accessible in the session.user object
		},
	}, //look here
});
