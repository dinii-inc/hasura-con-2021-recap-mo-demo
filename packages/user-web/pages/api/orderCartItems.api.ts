import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { isValidRequest } from "pages/api/internal/isValidRequest";
import { prisma } from "pages/api/internal/prisma";
import { OrderCartItemsOutput, RemoveMenuFromCartInput } from "types/graphql";
import { groupBy } from "util/groupBy";
import { sumBy } from "util/sumBy";

type Data = OrderCartItemsOutput | { message: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!isValidRequest(req, res)) return;

  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(400).json({ message: "Authorization header doesn't exist" });

  const tokenResult = jwt.decode(token);
  if (tokenResult === null || typeof tokenResult === "string") return res.status(400).json({ message: "Invalid token" });

  const { id: userId } = tokenResult;

  const cartItems = await prisma.cartItem.findMany({ where: { addedUserId: userId } });

  if (cartItems.length === 0) return res.status(400).json({ message: "Cart is empty" });

  const groupedCartItems = groupBy(cartItems, "menuId");

  const orders = Object.values(groupedCartItems).map((menus) => ({
    menuId: menus[0].menuId,
    orderedUserId: userId,
    name: menus[0].name,
    price: menus[0].price,
    quantity: sumBy(menus, "quantity"),
  }));

  try {
    await prisma.$transaction([
      prisma.order.createMany({ data: orders }),
      prisma.cartItem.deleteMany({ where: { id: { in: cartItems.map(({ id }) => id) } } }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Failed to remove menu from cart" });
  }
};

export default handler;
