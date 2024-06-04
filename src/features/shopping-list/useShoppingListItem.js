import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../services/apiShoppingList";
import { useParams } from "react-router-dom";

export function useShoppingListItem() {
  const { itemId } = useParams();

  const {
    isLoading,
    data: item,
    error,
  } = useQuery({
    queryKey: [`shopping-list`, itemId], //Identifies this data
    queryFn: () => getShoppingList(itemId), // Function responsible for querying the API (must return a promise)
    retry: false, //Not needed as not finding the data in this case means it probably doesnt exist
  });

  return { isLoading, error, item: item?.[0] };
}
