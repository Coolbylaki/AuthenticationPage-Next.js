import RegisterForm from "@/components/Forms/RegisterForm";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src="/devchallenges.svg" alt="devChallenges logo" width={130} height={18} />
			<h1 className={styles.title}>Join thousands of learners from around the world </h1>
			<RegisterForm />
			<p className={styles.desc}>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>

			<p className={styles.sub__desc}>or continue with these social profile</p>
		</main>
	);
}
