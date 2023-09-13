import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Function to find a user by email
async function findUserByEmail(email: string) {
	try {
		const user = await prisma.users.findUnique({
			where: {
				email,
			},
			select: {
				id: true,
				name: true,
				email: true,
				bio: true,
				profile_pic: true,
				phone: true,
			},
		});
		return user;
	} catch (error) {
		console.error("Error fetching user:", error);
		return null;
	}
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const email = searchParams.get("email");

	// Check if email is not provided
	if (!email) {
		return NextResponse.json({ error: "Email not provided" }, { status: 400 });
	}

	// Attempt to find the user by email
	const user = await findUserByEmail(email);

	// Check if the user was not found
	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}

	// Return user data if everything is okay
	return NextResponse.json({ user });
}

export async function POST(request: Request) {
	const body = await request.json();
	console.log(body);
	return body;
}
