import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { issueToken } from "pages/api/internal/issueToken";
import { isValidRequest } from "pages/api/internal/isValidRequest";
import { prisma } from "pages/api/internal/prisma";

type Data = { token: string } | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const { id, name, password } = req.body.input.input;

  if (typeof id !== "string" || id === "") return res.status(400).json({ message: "`id` is required" });
  if (typeof name !== "string" || name === "") return res.status(400).json({ message: "`name` is required" });
  if (typeof password !== "string" || password === "") return res.status(400).json({ message: "`password` is required" });

  const user = await prisma.user.findFirst({ where: { id } });
  if (user) return res.status(400).json({ message: "This user has already been in use" });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({ data: { id, name, password: hashedPassword } });

    const token = issueToken(id);
    return res.status(200).json({ token });
  } catch {
    return res.status(400).json({ message: "Failed to create user" });
  }
};

export default handler;
