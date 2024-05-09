import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../services/apiShoppingList";

//should be a mutation function, used for updating/editing a specific item (pass in an object with id and list of props to update)
export function useShoppingListItem() {
  const {
    isLoading,
    data: shoppingList,
    error,
  } = useQuery({
    queryKey: ["shopping-list"], //Identifies this data
    queryFn: () => getShoppingList(), // Function responsible for querying the API (must return a promise)
  });

  return { isLoading, error, shoppingList };
}
