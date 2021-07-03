import Head from "next/head";
import { AppBar } from "pages/index/AppBar";
import { Fab } from "pages/index/Fab";
import { Header } from "pages/index/Header";
import { MenuList } from "pages/index/MenuList";
import { useIndexAddMenuIntoCartMutation, useIndexGetCategoriesAndMenusQuery, useIndexSubscribeCartItemSubscription } from "pages/index/queries";
import React, { useState } from "react";
import { useTheme } from "styled-components";

const Index = () => {
  const { data: categoriesAndMenusData } = useIndexGetCategoriesAndMenusQuery();
  const categories = categoriesAndMenusData?.category ?? [];
  const menus = categoriesAndMenusData?.menu ?? [];

  const { data: cartItemsData } = useIndexSubscribeCartItemSubscription();
  const cartItems = cartItemsData?.cartItem ?? [];

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const [addMenuIntoCart] = useIndexAddMenuIntoCartMutation();

  const filteredMenus = menus.filter(({ categoryId }) => categoryId === (selectedCategoryId ?? categories[0]?.id));

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <Header />
      <AppBar categories={categories} onChange={setSelectedCategoryId} />
      <MenuList menus={filteredMenus} onClick={(menuId) => addMenuIntoCart({ variables: { input: { menuId, quantity: 1 } } })} />
      <Fab cartItems={cartItems} />
    </>
  );
};

export default Index;
