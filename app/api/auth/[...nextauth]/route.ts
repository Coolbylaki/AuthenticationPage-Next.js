import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				email: { label: "Email", type: "text", placeholder: "Test" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				// Hardcoded password for testing
				const hardcodedPassword = "laki98sd";

				const user = await prisma.users.findUnique({
					where: {
						email: credentials?.email,
					},
				});

				if (!user) {
					return null;
				}

				if (user && credentials?.password === hardcodedPassword) {
					return user;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: "/signIn",
	},
});

export { handler as GET, handler as POST };
