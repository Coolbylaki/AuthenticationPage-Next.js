"use client";

import RegisterForm from "@/components/Forms/RegisterForm";
import LoginProviders from "@/components/Providers/LoginProviders";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
	const [showRegister, setShowRegister] = useState(true);

	return (
		<main className={styles.main}>
			<Image src="/devchallenges.svg" alt="devChallenges logo" width={130} height={18} />

			{showRegister && <RegisterForm />}

			<p className={styles.sub__desc}>or continue with these social profile</p>

			<LoginProviders />

			<p className={styles.login}>
				Already a member?{" "}
				<span
					onClick={() => {
						setShowRegister((prevState) => !prevState);
					}}>
					Login
				</span>
			</p>

			<footer className={styles.footer}>
				<p>Lazar Stojanović</p>
				<p>devChallenges.io</p>
			</footer>
		</main>
	);
}
