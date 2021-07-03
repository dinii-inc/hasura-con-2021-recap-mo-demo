import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { cache } from "pages/api/internal/cache";
import { issueToken } from "pages/api/internal/issueToken";
import { isValidRequest } from "pages/api/internal/isValidRequest";

type Data = { token: string } | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const { id, password } = req.body.input.input;
  const storedPassword = cache.get(id);

  if (typeof id !== "string" || id === "") return res.status(400).json({ message: "id is required" });
  if (typeof password !== "string" || password === "") return res.status(400).json({ message: "password is required" });
  if (!storedPassword) return res.status(400).json({ message: "this user has not been registered" });

  const isValid = await bcrypt.compare(password, storedPassword);
  if (!isValid) return res.status(400).json({ message: "password is incorrect" });

  const token = issueToken(id);

  return res.status(200).json({ token });
};

export default handler;
