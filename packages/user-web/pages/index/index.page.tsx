import { useCartItems } from "hooks/useCartItems";
import Head from "next/head";
import { AppBar } from "pages/index/AppBar";
import { Fab } from "pages/index/Fab";
import { Header } from "pages/index/Header";
import { MenuList } from "pages/index/MenuList";
import { useIndexAddMenuIntoCartMutation, useIndexGetCategoriesAndMenusQuery, useIndexRemoveMenuFromCartMutation } from "pages/index/queries";
import React, { useCallback, useState } from "react";

const Index = () => {
  const { data: categoriesAndMenusData } = useIndexGetCategoriesAndMenusQuery();
  const categories = categoriesAndMenusData?.category ?? [];
  const menus = categoriesAndMenusData?.menu ?? [];

  const { cartItems } = useCartItems();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const filteredMenus = menus.filter(({ categoryId }) => categoryId === (selectedCategoryId ?? categories[0]?.id));

  const [addMenuIntoCart] = useIndexAddMenuIntoCartMutation();

  const [removeMenuFromCart] = useIndexRemoveMenuFromCartMutation();

  const onAdd = useCallback((menuId: string) => addMenuIntoCart({ variables: { input: { menuId, quantity: 1 } } }), [addMenuIntoCart]);

  const onRemove = useCallback((menuId: string) => removeMenuFromCart({ variables: { input: { menuId, quantity: 1 } } }), [removeMenuFromCart]);

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <Header />
      <AppBar categories={categories} onChange={setSelectedCategoryId} />
      <MenuList menus={filteredMenus} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <Fab cartItems={cartItems} />
    </>
  );
};

export default Index;
