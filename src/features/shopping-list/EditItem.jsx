import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useShoppingListItem } from "./useShoppingListItem";

function EditItem() {
  const { isLoading, error, shoppingListItem } = useShoppingListItem();
  console.log("shopping list item -> ", shoppingListItem);
  const moveBack = useMoveBack(); // an X in corner to return to the list screen
  return <div>edit item</div>;
}

export default EditItem;
