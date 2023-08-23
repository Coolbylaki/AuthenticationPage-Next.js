import Image from "next/image";
import styles from "./LoginProviders.module.css";

export default function LoginProviders() {
	return (
		<div className={styles.container}>
			<Image src="/Google.svg" alt="google" width={42} height={42} />
			<Image src="/Facebook.svg" alt="facebook" width={42} height={42} />
			<Image src="/Twitter.svg" alt="twitter" width={42} height={42} />
			<Image src="/Github.svg" alt="github" width={42} height={42} />
		</div>
	);
}
