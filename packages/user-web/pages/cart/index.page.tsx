import { useCartItems } from "hooks/useCartItems";
import Head from "next/head";
import { CartItemList } from "pages/cart/CartItemList";
import { Fab } from "pages/cart/Fab";
import { Header } from "pages/cart/Header";
import { useCartGetCartItemsQuery } from "pages/cart/queries";
import React from "react";

const Cart = () => {
  const { cartItems } = useCartItems();

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <Header />
      <CartItemList cartItems={cartItems} onClick={() => {}} />
      <Fab />
    </>
  );
};

export default Cart;
