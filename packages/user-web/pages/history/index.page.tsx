import { useOrders } from "hooks/useOrders";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Fab } from "pages/cart/Fab";
import { Header } from "pages/cart/Header";
import { useCartOrderCartItemsMutation } from "pages/cart/queries";
import React, { useCallback } from "react";
import { OrderList } from "./OrderList";

const History = () => {
  const { orders } = useOrders();

  const router = useRouter();
  const [orderCartItems] = useCartOrderCartItemsMutation();

  const onOrderCartItems = useCallback(async () => {
    await orderCartItems();
    await router.back();
  }, [orderCartItems, router]);

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <Header />
      <OrderList orders={orders} />
    </>
  );
};

export default History;
