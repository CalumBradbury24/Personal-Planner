import { useState } from "react";
import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import { FaSearchPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { useCreateShoppingListItem } from "./useCreateShoppingListItem";
import Spinner from "../../components/Spinner";
import TippyElement from "../../components/Tippy";

const StyledInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  grid-column: 2;
`;

const StyledInput = styled.input`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: var(--backdrop-color);
  width: 250px;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: width 400ms ease-in-out;

  &:focus {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
    width: 280px;
    transition: width 400ms ease-in-out;
  }
  &:hover {
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
    width: 280px;
    transition: width 400ms ease-in-out;
  }
`;

function ShoppingInput() {
  const { createShoppingListItem, isCreating } = useCreateShoppingListItem();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemSaved, setItemSaved] = useState(false);

  if (isCreating) return <Spinner />;

  const handleAddItem = () => {
    if (!input) return toast.error("No shopping list item provided");
    setIsOpenModal((currentShow) => !currentShow);
  };

  const addItemToList = () => {
    console.log("Adding Item!");
    const item = {
      name: input,
      quantity,
      saved: itemSaved,
    };

    createShoppingListItem(item, {
      onSuccess: () => {
        setInput("");
        setIsOpenModal(false);
      },
    });
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <IconButton type="search" onClick={() => handleAddItem()}>
        <FaSearchPlus />
      </IconButton>

      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <span>
            <p>{`Adding ${input} to shopping list...`}</p>
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
          <Button text="Add Item" onClick={() => addItemToList()} />
        </Modal>
      )}
    </StyledInputContainer>
  );
}

export default ShoppingInput;
