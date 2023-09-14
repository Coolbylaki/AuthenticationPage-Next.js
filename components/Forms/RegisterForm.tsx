import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { FormEvent, useState, ChangeEvent } from "react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>(
		{}
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Validate the form
		const errors = validate(formValues);

		// Set the form errors
		setFormErrors(errors);

		// Check if there are no errors
		if (Object.keys(errors).length === 0) {
			const user = {
				email: formValues.email,
				password: formValues.password,
			};

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
		}
	};

	const validate = (values: any) => {
		const errors: Record<string, any> = {};
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const passwordRegex = /^(?=.*\d).{8,}$/;

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}

		if (!values.password) {
			errors.password = "Password is required!";
		} else if (!passwordRegex.test(values.password)) {
			errors.password =
				"Password must contain a number and be at least 8 characters long";
		}

		return errors;
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
					<input
						type="text"
						placeholder="Email"
						defaultValue={formValues.email}
						name="email"
						onChange={handleChange}
					/>
				</div>

				<p className={styles.error}>{formErrors.email || ""}</p>

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
						defaultValue={formValues.password}
						onChange={handleChange}
					/>
				</div>

				<p className={styles.error}>{formErrors.password || ""}</p>

				<button type="submit">Start coding now</button>
			</form>
		</>
	);
}
