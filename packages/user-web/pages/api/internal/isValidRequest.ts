import { NextApiRequest, NextApiResponse } from "next";

export const isValidRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers["action_secret"] !== process.env["ACTION_SECRET"]) {
    res.status(400).json({ message: "Can't process invalid request" });
    return false;
  }
  return true;
};
