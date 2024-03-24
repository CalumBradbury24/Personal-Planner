import styled from "styled-components";
import PropTypes from "prop-types";
import TippyElement from "../../components/Tippy";
import IconButton from "../../components/IconButton";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDeleteShoppingListItem } from "./useDeleteShoppingList";

const StyledListItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--color-blue-100);
  ${(props) => {
    return `border-left: 5px solid ${props.type}`;
  }}
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
  const { isDeleting, deleteShoppingListItem } = useDeleteShoppingListItem();

  if (isDeleting) return console.log("Deleting item");
  return (
    <StyledListItem type={item.colour}>
      <StyledTextContainer>
        <StyledMainText>
          <p>{item.name || "Name not found"}</p>
          <TippyElement
            text={item.saved ? "Remove from favourites" : "Add to favourites"}
          >
            <IconButton>{item.saved ? <FaHeart /> : <FaRegHeart />}</IconButton>
          </TippyElement>
        </StyledMainText>
        <StyledSubText>{item.quantity || 0}</StyledSubText>
      </StyledTextContainer>
      <StyledButtonsContainer>
        <TippyElement text="Edit Item">
          <IconButton>
            <CiEdit />
          </IconButton>
        </TippyElement>
        <TippyElement text="Delete item from shopping list">
          <IconButton onClick={() => deleteShoppingListItem(item.itemId)}>
            <MdDeleteForever />
          </IconButton>
        </TippyElement>
      </StyledButtonsContainer>
    </StyledListItem>
  );
}

export default ListItem;
