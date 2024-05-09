import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteItemFromShoppingList } from "../../services/apiShoppingList";
import toast from "react-hot-toast";

export function useDeleteShoppingListItem() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteShoppingListItem } = useMutation(
    {
      mutationFn: deleteItemFromShoppingList,
      onSuccess: () => {
        toast.success("Item(s) successfully deleted!");

        // Invalidates the cache using the query key we set up when fetching the shopping list data in useShoppingList hook
        // Clearing the cache causes a re-fetch of the data so when an item is deleted the shopping list re-renders
        queryClient.invalidateQueries({ queryKey: ["shopping-list"] });
      },
      onError: (err) => toast.error(err.message), //Recevies the error thrown in the mutationFn
    }
  );

  return { isDeleting, deleteShoppingListItem };
}
