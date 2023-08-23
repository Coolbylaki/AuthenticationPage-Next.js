import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
	return (
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
	);
}
