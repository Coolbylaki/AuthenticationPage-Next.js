"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
	const { data: session } = useSession();

	if (session && session.user) {
		return (
			<>
				<h1>Profile Page!</h1>
			</>
		);
	} else {
		return <h1>You are not logged in!</h1>;
	}
}
