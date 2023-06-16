import { OrdersSubscription } from "hooks/useOrders/queries";

export type Order = OrdersSubscription["order"][number];
