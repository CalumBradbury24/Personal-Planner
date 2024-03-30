import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addItemToShoppingList } from "../../services/apiShoppingList";
import toast from "react-hot-toast";

export function useCreateShoppingListItem() {
  const queryClient = useQueryClient();
  const { mutate: createShoppingListItem, isLoading: isCreating } = useMutation(
    {
      mutationFn: addItemToShoppingList,
      onSuccess: () => {
        toast.success("Item successfully added!");
        //Invalidate react query cache list data so we re-fetch it and re-render the updated data
        queryClient.invalidateQueries({ queryKey: ["shopping-list"] });
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return { createShoppingListItem, isCreating };
}
