import supabase from "./supabase";

const getShoppingList = async () => {
  const { data, error } = await supabase
    .from("ShoppingListItems")
    .select(`itemId, name, saved, ItemCategories (name)`);

  const shoppingList = data.map((entry) => {
    const datum = {
      ...entry,
      categoryType: entry.ItemCategories.name,
    };

    delete datum.ItemCategories;
    return datum;
  });

  console.log("Shopping list -> ", shoppingList);

  if (error) {
    console.error(error);
    throw new Error("Shopping list could not be loaded");
  }
  return shoppingList;
};

export { getShoppingList };
