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

  shoppingList.sort((a, b) => a.categoryType.localeCompare(b.categoryType));
  console.log("Shopping list -> ", shoppingList);

  if (error) {
    console.error(error);
    throw new Error("Shopping list could not be loaded");
  }
  return shoppingList;
};

const deleteItemFromShoppingList = async (itemId = 0) => {
  let query = supabase.from("ShoppingListItems").delete();

  if (!itemId) query = query.eq("saved", false);
  else query = query.eq("itemId", itemId);

  const { error } = await query;
  console.log(error);
  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }

  return true;
};

const addItemToShoppingList = async (item) => {
  const { name, quantity, saved, categoryId } = item;
  const { error } = await supabase
    .from("ShoppingListItems")
    .insert([{ name, quantity, saved, categoryId }])
    .select();
  console.log(error);
  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  return true;
};

const getShoppingItemCategories = async () => {
  const { data: itemCategories, error } = await supabase
    .from("ItemCategories")
    .select("categoryId, name, colour");

  console.log("item categories -> ", itemCategories);

  if (error) {
    console.error(error);
    throw new Error("Item categories could not be loaded");
  }
  return itemCategories;
};

export {
  getShoppingList,
  deleteItemFromShoppingList,
  addItemToShoppingList,
  getShoppingItemCategories,
};
