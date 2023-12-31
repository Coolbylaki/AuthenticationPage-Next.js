"use client";

import RegisterForm from "@/components/Forms/RegisterForm";
import LoginProviders from "@/components/Providers/LoginProviders";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
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

			<RegisterForm />

			<p className={styles.sub__desc}>or continue with these social profile</p>

			<LoginProviders />

			<p className={styles.login}>
				Already a member?
				<span
					onClick={() => {
						signIn();
					}}>
					{" Login"}
				</span>
			</p>

			<footer className={styles.footer}>
				<p>Lazar Stojanović</p>
				<p>devchallenges.io</p>
			</footer>
		</main>
	);
}
