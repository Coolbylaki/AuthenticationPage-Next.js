"use client";

import LoginProviders from "@/components/Providers/LoginProviders";
import LoginForm from "@/components/Forms/LoginForm";

import Image from "next/image";
import styles from "./page.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const [logoSrc, setLogoSrc] = useState("/devchallenges.svg");

	const router = useRouter();

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

			<LoginForm />

			<p className={styles.sub__desc}>or continue with these social profile</p>

			<LoginProviders />

			<p className={styles.login}>
				Don&apos;t have an account yet?
				<span onClick={() => router.push("/")}>{" Register"}</span>
			</p>

			<footer className={styles.footer}>
				<p>Lazar Stojanović</p>
				<p>devchallenges.io</p>
			</footer>
		</main>
	);
}
