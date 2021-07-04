import { useCartItemsSubscription } from "hooks/useCartItems/queries";

export const useCartItems = () => {
  const { data } = useCartItemsSubscription();
  const cartItems = data?.cartItem ?? [];

  return { cartItems };
};
