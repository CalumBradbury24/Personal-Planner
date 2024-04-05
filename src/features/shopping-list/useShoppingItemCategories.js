import { useQuery } from "@tanstack/react-query";
import { getShoppingItemCategories } from "../../services/apiShoppingList";

export function useItemCategories() {
  const {
    isLoading: isLoadingItemCategories,
    data: itemCategories,
    error,
  } = useQuery({
    queryKey: ["shopping-item-categories"], //Identifies this data
    queryFn: getShoppingItemCategories, // Function responsible for querying the API (must return a promise)
  });

  return { isLoadingItemCategories, error, itemCategories };
}
