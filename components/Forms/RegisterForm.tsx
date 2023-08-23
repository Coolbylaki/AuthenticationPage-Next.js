import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
	return (
		<>
			<h1 className={styles.title}>Join thousands of learners from around the world </h1>
			<p className={styles.desc}>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>

			<form className={styles.reg__form}>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faEnvelope}
						style={{ color: "#828282" }}
					/>
					<input type="text" placeholder="Email" />
				</div>
				<div className={styles.inputContainer}>
					<FontAwesomeIcon
						className={styles.ico}
						icon={faLock}
						style={{ color: "#828282" }}
					/>
					<input type="text" placeholder="Password" />
				</div>

				<button type="submit">Start coding now</button>
			</form>
		</>
	);
}
