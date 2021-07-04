import { useCartItems } from "hooks/useCartItems";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { CartItemList } from "pages/cart/CartItemList";
import { Fab } from "pages/cart/Fab";
import { Header } from "pages/cart/Header";
import { useCartGetCartItemsQuery, useCartOrderCartItemsMutation } from "pages/cart/queries";
import React, { useCallback } from "react";

const Cart = () => {
  const { cartItems } = useCartItems();

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
      <CartItemList cartItems={cartItems} />
      <Fab onOrderCartItems={onOrderCartItems} />
    </>
  );
};

export default Cart;
