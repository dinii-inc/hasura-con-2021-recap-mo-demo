import { Category } from "pages/index/types";
import React, { useCallback, useState } from "react";

import { AppBar as MuiAppBar, Tab, Tabs } from "@material-ui/core";

type Props = {
  categories: Category[];
  onChange: (categoryId: string) => void;
};

export const AppBar = ({ categories, onChange }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = useCallback(
    (_: unknown, value: number) => {
      setSelectedTab(value);
      const categoryId = categories[value]?.id;
      if (categoryId) onChange(categoryId);
    },
    [categories, onChange],
  );

  return (
    <MuiAppBar position="static">
      <Tabs value={selectedTab} onChange={handleChange} centered>
        {categories.map(({ id, name }) => (
          <Tab key={id} label={name} disableRipple />
        ))}
      </Tabs>
    </MuiAppBar>
  );
};
