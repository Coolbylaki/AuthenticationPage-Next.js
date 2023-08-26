"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./LoginForm.module.css";

import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

export default function LoginForm() {
	const username = useRef("");
	const password = useRef("");

	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await signIn("credentials", {
			username: username.current,
			password: password.current,
			redirect: true,
			callbackUrl: "http://localhost:3000/profile",
		});
	};

	return (
		<>
			<h1 className={styles.title}>Login</h1>

			<form className={styles.reg__form} onSubmit={onSubmitHandler}>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faEnvelope}
						style={{ color: "#828282" }}
					/>
					<input
						type="email"
						placeholder="Email"
						name="username"
						onChange={(e) => (username.current = e.target.value)}
					/>
				</div>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faLock}
						style={{ color: "#828282" }}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e) => (password.current = e.target.value)}
					/>
				</div>

				<button type="submit">Login</button>
			</form>
		</>
	);
}
