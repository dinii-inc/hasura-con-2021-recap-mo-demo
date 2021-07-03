import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { cache } from "pages/api/internal/cache";
import { issueToken } from "pages/api/internal/issueToken";
import { isValidRequest } from "pages/api/internal/isValidRequest";

type Data = { token: string } | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const { id, password } = req.body.input.input;

  if (typeof id !== "string" || id === "") return res.status(400).json({ message: "id is required" });
  if (typeof password !== "string" || password === "") return res.status(400).json({ message: "password is required" });
  if (cache.has(id)) return res.status(400).json({ message: "this user has already been in use" });

  const hashedPassword = await bcrypt.hash(password, 10);

  cache.set(id, hashedPassword);

  const token = issueToken(id);

  return res.status(200).json({ token });
};

export default handler;
