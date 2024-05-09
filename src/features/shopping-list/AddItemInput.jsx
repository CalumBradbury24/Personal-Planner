import { useState } from "react";
import styled from "styled-components";

import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";
import AddItem from "./AddItem";

import { useItemCategories } from "./useShoppingItemCategories";
import { devices } from "../../styles/styleConstants";
import { FaSearchPlus } from "react-icons/fa";

const StyledInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  grid-column: 2;
  width: fit-content;

  @media screen and ${devices.medium} {
    height: 35px;
  }
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

  @media screen and ${devices.medium} {
    width: 10px;
  }

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

  @media screen and ${devices.medium} {
    width: 50px;

    &:focus,
    &:hover {
      width: 225px;
    }
  }
`;

function AddItemInput() {
  const {
    isLoadingItemCategories,
    error,
    itemCategories = [],
  } = useItemCategories();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (!input) return toast.error("No shopping list item provided");
    setIsOpenModal((currentShow) => !currentShow);
  };

  if (isLoadingItemCategories) console.log("loading item categories...");
  if (error) console.warn("Error loading item categories");

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <IconButton type="search" onClick={() => handleAddItem()}>
        <FaSearchPlus />
      </IconButton>

      {isOpenModal && !isLoadingItemCategories && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <AddItem
            itemName={input}
            setIsOpenModal={setIsOpenModal}
            setInput={setInput}
            itemCategories={itemCategories}
          />
        </Modal>
      )}
    </StyledInputContainer>
  );
}

export default AddItemInput;
