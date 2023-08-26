import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Credentials = {
	username: string;
	password: string;
};

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				username: { label: "Username", type: "text", placeholder: "Test" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				const { username, password } = credentials as Credentials;
				// Perform your login logic or find out user from database
				if (username !== "test@test.com" && password !== "1234") {
					return null;
				}

				// If everything is fine
				const user = { id: "1234", name: "John Doe", username: "test@test.com" };
				console.log(user);
				return user;
			},
		}),
	],
	pages: {
		signIn: "/signIn",
	},
});

export { handler as GET, handler as POST };
