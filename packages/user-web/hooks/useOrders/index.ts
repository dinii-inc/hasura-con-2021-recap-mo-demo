import { useOrdersSubscription } from "hooks/useOrders/queries";

export const useOrders = () => {
  const { data } = useOrdersSubscription();
  const orders = data?.order ?? [];

  return { orders };
};
