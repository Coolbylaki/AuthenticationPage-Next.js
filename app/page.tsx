"use client";

import RegisterForm from "@/components/Forms/RegisterForm";
import LoginProviders from "@/components/Providers/LoginProviders";
import LoginForm from "@/components/Forms/LoginForm";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
	const [showRegister, setShowRegister] = useState(true);
	const [logoSrc, setLogoSrc] = useState("/devchallenges.svg");

	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setLogoSrc("/devchallenges-light.svg");
		} else {
			setLogoSrc("/devchallenges.svg");
		}
	}, []);

	return (
		<main className={styles.main}>
			<Image
				src={logoSrc}
				alt="devChallenges logo"
				width={130}
				height={18}
				className={styles.logo}
			/>

			{showRegister ? <RegisterForm /> : <LoginForm />}

			<p className={styles.sub__desc}>or continue with these social profile</p>

			<LoginProviders />

			<p className={styles.login}>
				{showRegister ? "Already a member?" : "Don't have an account yet?"}
				<span
					onClick={() => {
						setShowRegister((prevState) => !prevState);
					}}>
					{showRegister ? " Login" : " Register"}
				</span>
			</p>

			<footer className={styles.footer}>
				<p>Lazar Stojanović</p>
				<p>devchallenges.io</p>
			</footer>
		</main>
	);
}
