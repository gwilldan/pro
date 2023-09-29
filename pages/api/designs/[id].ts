import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const design = await prisma.design.findUnique({
    where: {
      id: id,
    },
  });
  if (!design) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(design);
}
