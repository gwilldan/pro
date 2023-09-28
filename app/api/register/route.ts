import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client"; // Import the PrismaClient
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const prisma = new PrismaClient(); // Create a Prisma client instance
  const User = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  await prisma.$disconnect(); // Disconnect from the Prisma client

  return NextResponse.json(User);
}
