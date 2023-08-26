import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Credentials = {
	email: string;
	password: string;
};

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				email: { label: "Email", type: "text", placeholder: "Test" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials as Credentials;
				// Perform your login logic or find out user from database
				if (email !== "test@test.com" && password !== "1234") {
					return null;
				}
				// If everything is fine
				const user = {
					id: "1234",
					name: "John Doe!!!",
					email: "test@test.com",
				};
				return user;
			},
		}),
	],
	pages: {
		signIn: "/signIn",
	},
});

export { handler as GET, handler as POST };
