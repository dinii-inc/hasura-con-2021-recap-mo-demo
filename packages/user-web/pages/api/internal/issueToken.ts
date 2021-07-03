import jwt from "jsonwebtoken";

const key = process.env["JWT_SECRET_KEY"];

if (!key) throw new Error("Please set JWT_SECRET_KEY env");

export const issueToken = (id: string) => jwt.sign({ id }, key, { expiresIn: "1h" });
