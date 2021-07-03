import { useSignOut } from "hooks/useSignOut";
import Head from "next/head";
import Image from "next/image";
import { AppBar } from "pages/index/AppBar";
import { Header } from "pages/index/Header";
import { MenuList } from "pages/index/MenuList";
import { useIndexGetCategoriesAndMenusQuery } from "pages/index/queries";
import React, { useState } from "react";

const Index = () => {
  const { data: categoriesAndMenusData } = useIndexGetCategoriesAndMenusQuery();
  const categories = categoriesAndMenusData?.category ?? [];
  const menus = categoriesAndMenusData?.menu ?? [];

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const filteredMenus = menus.filter(({ categoryId }) => categoryId === (selectedCategoryId ?? categories[0]?.id));

  return (
    <>
      <Head>
        <title>MO App</title>
      </Head>
      <Header />
      <AppBar categories={categories} onChange={setSelectedCategoryId} />
      <MenuList menus={filteredMenus} />
    </>
  );
};

export default Index;
