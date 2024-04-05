import { useState } from "react";
import Button from "../../components/Button";
import TippyElement from "../../components/Tippy";
import IconButton from "../../components/IconButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCreateShoppingListItem } from "./useCreateShoppingListItem";
import Spinner from "../../components/Spinner";

function AddItem({ itemName = "", setIsOpenModal, setInput, itemCategories }) {
  const { createShoppingListItem, isCreating } = useCreateShoppingListItem();
  const [quantity, setQuantity] = useState("");
  const [itemSaved, setItemSaved] = useState(false);
  const [itemCategoryId, setItemCategoryId] = useState(null);

  const addItemToList = () => {
    console.log("Adding Item!");
    const item = {
      name: itemName,
      quantity,
      saved: itemSaved,
      categoryId: itemCategoryId,
    };
    console.log(item);

    createShoppingListItem(item, {
      onSuccess: () => {
        setInput("");
        setIsOpenModal(false);
      },
    });
  };

  return (
    <>
      <span>
        <p>{`Adding ${itemName} to shopping list...`}</p>
        <TippyElement
          text={itemSaved ? "Remove from favourites" : "Add to favourites"}
        >
          <IconButton onClick={() => setItemSaved((saved) => !saved)}>
            {itemSaved ? <FaHeart /> : <FaRegHeart />}
          </IconButton>
        </TippyElement>
      </span>
      <div>
        <label>Quantity: </label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Category: </label>
        <select onChange={(e) => setItemCategoryId(e.target.value)}>
          {itemCategories.map((category) => {
            return (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <Button text="Add Item" onClick={() => addItemToList()} />
      {isCreating && <Spinner type="modal-spinner" />}
    </>
  );
}

export default AddItem;
