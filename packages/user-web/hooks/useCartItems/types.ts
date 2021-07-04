import { CartItemsSubscription } from "hooks/useCartItems/queries";

export type CartItem = CartItemsSubscription["cartItem"][number];
