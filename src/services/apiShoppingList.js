import supabase from "./supabase";

const getShoppingList = async () => {
  const { data, error } = await supabase
    .from("ShoppingListItems")
    .select(`itemId, name, saved, quantity, ItemCategories (name, colour)`);

  const shoppingList = data.map((entry) => {
    const datum = {
      ...entry,
      categoryType: entry.ItemCategories?.name || "",
      colour: entry.ItemCategories?.colour || "saddlebrown",
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

const deleteItemFromShoppingList = async (itemId) => {
  const { error } = await supabase
    .from("ShoppingListItems")
    .delete()
    .eq("itemId", itemId);
  console.log(error);
  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }

  return true;
};

const addItemToShoppingList = async (item) => {
  const { name, quantity, saved } = item;
  const { error } = await supabase
    .from("ShoppingListItems")
    .insert([{ name, quantity, saved }])
    .select();
  console.log(error);
  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  return true;
};

export { getShoppingList, deleteItemFromShoppingList, addItemToShoppingList };
