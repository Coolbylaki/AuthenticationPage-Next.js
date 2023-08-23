import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Authenticator App",
	description: "NextAuth authentication with 4 providers practice project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={noto.className}>{children}</body>
		</html>
	);
}
