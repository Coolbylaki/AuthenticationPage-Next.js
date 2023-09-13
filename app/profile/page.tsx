"use client";

import styles from "./page.module.css";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Profile() {
	const [logoSrc, setLogoSrc] = useState("/devchallenges.svg");
	const [user, setUser] = useState({});

	const { data: session } = useSession();

	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setLogoSrc("/devchallenges-light.svg");
		} else {
			setLogoSrc("/devchallenges.svg");
		}
	}, []);

	useEffect(() => {
		const fetchUser = async () => {
			if (session && session.user?.email) {
				const response = await fetch(`/api/user?email=${session.user?.email}`);
				const data = await response.json();

				setUser(data.user);
			}
		};

		fetchUser();
	}, [session]);

	if (session && session.user) {
		return (
			<>
				<h1>Hello</h1>
			</>
		);
	} else {
		return <h1 className={styles.notLogged}>You are not logged in!</h1>;
	}
}
