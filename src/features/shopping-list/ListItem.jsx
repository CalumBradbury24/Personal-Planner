import styled from "styled-components";
import PropTypes from "prop-types";
import TippyElement from "../../components/Tippy";
import IconButton from "../../components/IconButton";
import AreYouSure from "../../components/AreYouSure";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { MdDeleteForever } from "react-icons/md";
import { useDeleteShoppingListItem } from "./useDeleteShoppingListItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const AreYouSureButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding-top: 15px;
`;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ListItem({ item }) {
  const [openAreYouSureModal, setOpenAreYouSureModal] = useState(false);
  const { isDeleting, deleteShoppingListItem } = useDeleteShoppingListItem();
  const navigate = useNavigate();
  const [isStruck, setIsStruck] = useState(
    !!localStorage.getItem(`struck-through-${item.itemId}`)
  );

  useEffect(() => {
    setIsStruck(!!localStorage.getItem(`struck-through-${item.itemId}`));
  }, [setIsStruck, item.itemId]);

  if (isDeleting) return console.log("Deleting item");
  console.log(isStruck, "rerendering");
  return (
    <StyledListItem type={item.colour}>
      <StyledRadioButtonAndTextContainer>
        <input
          onChange={() => {
            localStorage.setItem(
              `struck-through-${item.itemId}`,
              JSON.stringify(!isStruck)
            );
            setIsStruck((cur) => !cur);
          }}
          type="checkbox"
          checked={isStruck ? true : false}
          value={isStruck ? true : false}
          style={{
            marginTop: "2px",
            width: "20px",
            height: "20px",
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
        <IconButton onClick={() => navigate(`/edit/${item.itemId}`)}>
          <CiEdit />
        </IconButton>
        <IconButton onClick={() => setOpenAreYouSureModal((e) => !e)}>
          <MdDeleteForever />
        </IconButton>
      </StyledButtonsContainer>

      {openAreYouSureModal && (
        <Modal onCloseModal={() => setOpenAreYouSureModal(false)}>
          <AreYouSure
            text={`Are you sure you wish to delete ${item.name} from your shopping list?`}
          >
            <AreYouSureButtonsContainer>
              <Button
                variation="okay"
                text="Yes"
                icon={<FaRegThumbsUp />}
                onClick={() => deleteShoppingListItem(item.itemId)}
              />
              <Button
                variation="cancel"
                text="No"
                icon={<TiDelete style={{ height: "25px", width: "25px" }} />}
                onClick={() => setOpenAreYouSureModal(false)}
              />
            </AreYouSureButtonsContainer>
          </AreYouSure>
        </Modal>
      )}
    </StyledListItem>
  );
}

export default ListItem;
