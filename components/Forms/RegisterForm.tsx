import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { FormEvent, useState, useRef } from "react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
	const [isPasswordValid, setIsPasswordValid] = useState(false);

	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		const passwordRegex = /^(?=.*\d).{8,}$/;
		event.preventDefault();

		const user = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};

		if (!user.password?.match(passwordRegex)) {
			setIsPasswordValid(true);
			return;
		}

		setIsPasswordValid(false);

		try {
			const response = await fetch("/api/user", {
				method: "POST",
				body: JSON.stringify(user),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				console.log("User registered successfully!");
			} else {
				console.error("User registration failed.");
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
	};

	return (
		<>
			<h1 className={styles.title}>Join thousands of learners from around the world </h1>
			<p className={styles.desc}>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>

			<form className={styles.reg__form} onSubmit={onSubmitHandler}>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faEnvelope}
						style={{ color: "#828282" }}
					/>
					<input type="email" placeholder="Email" ref={emailRef} />
				</div>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faLock}
						style={{ color: "#828282" }}
					/>
					<input type="password" placeholder="Password" ref={passwordRef} />
				</div>

				{isPasswordValid && (
					<p className={styles.error}>
						Password must contain a number and at least 8 char long
					</p>
				)}

				<button type="submit">Start coding now</button>
			</form>
		</>
	);
}
