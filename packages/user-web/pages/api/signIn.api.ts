import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { issueToken } from "pages/api/internal/issueToken";
import { isValidRequest } from "pages/api/internal/isValidRequest";
import { prisma } from "pages/api/internal/prisma";

type Data = { token: string } | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const { id, password } = req.body.input.input;

  if (typeof id !== "string" || id === "") return res.status(400).json({ message: "`id` is required" });
  if (typeof password !== "string" || password === "") return res.status(400).json({ message: "`password` is required" });

  const user = await prisma.user.findFirst({ where: { id } });
  if (!user) return res.status(400).json({ message: "This user has not been registered" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: "Password is incorrect" });

  const token = issueToken(id);

  return res.status(200).json({ token });
};

export default handler;
