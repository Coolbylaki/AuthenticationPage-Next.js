import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./LoginForm.module.css";

export default function LoginForm() {
	return (
		<>
			<h1 className={styles.title}>Login</h1>

			<form className={styles.reg__form}>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faEnvelope}
						style={{ color: "#828282" }}
					/>
					<input type="email" placeholder="Email" name="email" />
				</div>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faLock}
						style={{ color: "#828282" }}
					/>
					<input type="password" placeholder="Password" name="password" />
				</div>

				<button type="submit">Login</button>
			</form>
		</>
	);
}
