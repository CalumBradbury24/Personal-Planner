import styled from "styled-components";
import PropTypes from "prop-types";
import TippyElement from "../../components/Tippy";
import IconButton from "../../components/IconButton";
import AreYouSure from "../../components/AreYouSure";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { MdDeleteForever } from "react-icons/md";
import { useDeleteShoppingListItem } from "./useDeleteShoppingListItem";
import { useState } from "react";

import { TiDelete } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaRegThumbsUp } from "react-icons/fa";

const StyledListItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--color-blue-100);
  ${(props) => {
    return `border-left: 5px solid ${props.type}`;
  }}
`;

const StyledRadioButtonAndTextContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledTextContainer = styled.div``;
const StyledMainText = styled.span`
  display: flex;
  gap: 10px;
  > p {
    color: var(--color-grey-900);
    font-size: 0.8rem;
  }
`;

const StyledSubText = styled.p`
  color: var(--color-grey-400);
  font-size: 0.7rem;
`;

const StyledButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 5px;
  height: fit-content;
`;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ListItem({ item }) {
  const [reRender, setRerender] = useState(false);
  const [openAreYouSureModal, setOpenAreYouSureModal] = useState(false);
  const { isDeleting, deleteShoppingListItem } = useDeleteShoppingListItem();
  const isStruck = !!localStorage.getItem(`struck-through-${item.itemId}`);

  if (isDeleting) return console.log("Deleting item");

  return (
    <StyledListItem type={item.colour}>
      <StyledRadioButtonAndTextContainer>
        <input
          onChange={() => {
            localStorage.setItem(
              `struck-through-${item.itemId}`,
              JSON.stringify(!isStruck)
            );
            setRerender((r) => !r);
          }}
          type="checkbox"
          checked={isStruck ? true : false}
          value={isStruck ? true : false}
          style={{
            marginTop: "1px",
            width: "15px",
            height: "15px",
          }}
        ></input>
        <StyledTextContainer>
          <StyledMainText>
            <p
              style={{
                textDecoration: `${isStruck ? "line-through" : ""}`,
              }}
            >
              {item.name || "Name not found"}
            </p>
            <TippyElement
              text={item.saved ? "Remove from favourites" : "Add to favourites"}
            >
              <IconButton>
                {item.saved ? <FaHeart /> : <FaRegHeart />}
              </IconButton>
            </TippyElement>
          </StyledMainText>
          <StyledSubText>{item.quantity || 0}</StyledSubText>
        </StyledTextContainer>
      </StyledRadioButtonAndTextContainer>
      <StyledButtonsContainer>
        <TippyElement text="Edit Item">
          <IconButton>
            <CiEdit />
          </IconButton>
        </TippyElement>
        <TippyElement text="Delete item from shopping list">
          <IconButton onClick={() => setOpenAreYouSureModal((e) => !e)}>
            <MdDeleteForever />
          </IconButton>
        </TippyElement>
      </StyledButtonsContainer>

      {openAreYouSureModal && (
        <Modal onCloseModal={() => setOpenAreYouSureModal(false)}>
          <AreYouSure
            text={`Are you sure you wish to delete ${item.name} from your shopping list?`}
          >
            <Button
              text="Yes"
              icon={<FaRegThumbsUp />}
              onClick={() => deleteShoppingListItem(item.itemId)}
            />
            <Button
              text="No"
              icon={<TiDelete />}
              onClick={() => setOpenAreYouSureModal(false)}
            />
          </AreYouSure>
        </Modal>
      )}
    </StyledListItem>
  );
}

export default ListItem;
