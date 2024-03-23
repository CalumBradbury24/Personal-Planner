import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../services/apiShoppingList";

export function useShoppingList() {
  const {
    isLoading,
    data: shoppingList,
    error,
  } = useQuery({
    queryKey: ["shopping-list"], //Identifies this data
    queryFn: getShoppingList, // Function responsible for querying the API (must return a promise)
  });

  return { isLoading, error, shoppingList };
}
