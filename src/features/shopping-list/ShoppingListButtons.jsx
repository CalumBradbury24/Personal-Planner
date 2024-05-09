import IconButton from "../../components/IconButton";
import styled from "styled-components";
import TippyElement from "../../components/Tippy";
import Spinner from "../../components/Spinner";
import { devices } from "../../styles/styleConstants";

//import { GrPowerReset } from "react-icons/gr";
import { VscClearAll } from "react-icons/vsc";
import { useDeleteShoppingListItem } from "./useDeleteShoppingListItem";

const StyledButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  font-size: 1.1rem;
  padding-right: 10px;

  @media screen and ${devices.medium} {
    flex-direction: column;
    gap: 0px;
  }
`;

function ShoppingListButtons({ setUntoggleItems }) {
  const { isDeleting, deleteShoppingListItem } = useDeleteShoppingListItem();
  // const clearItemsFromLocalStorage = () => {
  //   Object.entries(window.localStorage).forEach((item) => {
  //     if (item[0].includes("struck-through"))
  //       window.localStorage.removeItem(item[0]);
  //   });
  //   //localStorage.clear();
  //   setUntoggleItems((currentstate) => !currentstate);
  // };
  if (isDeleting) return <Spinner type="overlay-spinner" />;
  return (
    <StyledButtonsContainer>
      <TippyElement text="Clear all un-saved items from list">
        <IconButton
          type="shopping-list-button"
          onClick={() => deleteShoppingListItem()}
        >
          <VscClearAll />
        </IconButton>
      </TippyElement>
      {/* <TippyElement text="Reset all to un-selected">
        <IconButton
          type="shopping-list-button"
          onClick={() => clearItemsFromLocalStorage()}
        >
          <GrPowerReset />
        </IconButton>
      </TippyElement> */}
    </StyledButtonsContainer>
  );
}

export default ShoppingListButtons;
