"use client";

import styles from "./page.module.css";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Profile() {
	const [logoSrc, setLogoSrc] = useState("/devchallenges.svg");

	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setLogoSrc("/devchallenges-light.svg");
		} else {
			setLogoSrc("/devchallenges.svg");
		}
	}, []);

	const { data: session } = useSession();

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
