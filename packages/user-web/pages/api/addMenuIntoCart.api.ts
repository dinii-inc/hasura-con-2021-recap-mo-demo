import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { issueToken } from "pages/api/internal/issueToken";
import { isValidRequest } from "pages/api/internal/isValidRequest";
import { prisma } from "pages/api/internal/prisma";
import { AddMenuIntoCartInput, AddMenuIntoCartOutput } from "types/graphql";

type Data = AddMenuIntoCartOutput | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(400).json({ message: "Authorization header doesn't exist" });

  const tokenResult = jwt.decode(token);
  if (tokenResult === null || typeof tokenResult === "string") return res.status(400).json({ message: "Invalid token" });

  const { id: addedUserId } = tokenResult;
  const { menuId, quantity } = req.body.input.input as AddMenuIntoCartInput;

  const menu = await prisma.menu.findUnique({ where: { id: menuId } });
  if (menu === null) return res.status(400).json({ message: "Menu doesn't exist" });

  const cartItem = await prisma.cartItem.findFirst({ where: { menuId, addedUserId } });

  try {
    const { name, price } = menu;
    if (cartItem) {
      await prisma.cartItem.update({ where: { id: cartItem.id }, data: { quantity: { increment: quantity } } });
    } else {
      await prisma.cartItem.create({ data: { menuId, addedUserId, name, price, quantity } });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Failed to add menu into cart" });
  }
};

export default handler;
