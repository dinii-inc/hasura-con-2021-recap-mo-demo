import { IndexGetCategoriesAndMenusQuery, IndexSubscribeCartItemSubscription } from "pages/index/queries";

export type Category = IndexGetCategoriesAndMenusQuery["category"][number];

export type Menu = IndexGetCategoriesAndMenusQuery["menu"][number];
