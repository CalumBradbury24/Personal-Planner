import { useState } from "react";
import Button from "../../components/Button";
import TippyElement from "../../components/Tippy";
import IconButton from "../../components/IconButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCreateShoppingListItem } from "./useCreateShoppingListItem";
import Spinner from "../../components/Spinner";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAddItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  min-width: 300px;
`;

const StyledHeading = styled.span`
  display: flex;
  gap: 5px;
  width: 100%;
  overflow: hidden;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  align-items: flex-end;
  color: var(--color-grey-900);
`;

AddItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
  itemCategories: PropTypes.array,
};

function AddItem({
  itemName = "",
  setIsOpenModal,
  setInput,
  itemCategories = [],
}) {
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
      categoryId: +itemCategoryId || undefined,
    };

    createShoppingListItem(item, {
      onSuccess: () => {
        setInput("");
        setIsOpenModal(false);
      },
    });
  };

  return (
    <StyledAddItem>
      <StyledHeading>
        <TippyElement
          text={itemSaved ? "Remove from favourites" : "Add to favourites"}
        >
          <IconButton onClick={() => setItemSaved((saved) => !saved)}>
            {itemSaved ? <FaHeart /> : <FaRegHeart />}
          </IconButton>
        </TippyElement>
        <p
          style={{
            color: "var(--color-brand-700)",
            margin: "auto",
            textWrap: "nowrap",
          }}
        >{`Adding ${itemName} to shopping list...`}</p>
      </StyledHeading>
      <StyledInputContainer>
        <label>Quantity: </label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{
            width: "70%",
            border: "none",
            borderBottom: "1px solid var(--color-brand-500)",
            backgroundColor: "unset",
          }}
        ></input>
      </StyledInputContainer>
      <StyledInputContainer>
        <label>Category: </label>
        <select
          onChange={(e) => setItemCategoryId(e.target.value)}
          style={{
            width: "70%",
            border: "none",
            borderBottom: "1px solid var(--color-brand-500)",
            backgroundColor: "unset",
          }}
        >
          {[{ name: "Select...", categoryId: 0 }]
            .concat(itemCategories)
            .map((category) => {
              return (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.name}
                </option>
              );
            })}
        </select>
      </StyledInputContainer>
      <Button text="Add Item" onClick={() => addItemToList()} />
      {isCreating && <Spinner type="modal-spinner" />}
    </StyledAddItem>
  );
}

export default AddItem;
