import IconButton from "../../components/IconButton";
import styled from "styled-components";
import TippyElement from "../../components/Tippy";
import { devices } from "../../styles/styleConstants";

import { GrPowerReset } from "react-icons/gr";
import { VscClearAll } from "react-icons/vsc";

const StyledButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding-right: 10px;

  @media screen and ${devices.medium} {
    flex-direction: column;
    gap: 0px;
  }
`;

function ShoppingListButtons({ setUntoggleItems }) {
  const clearItemsFromLocalStorage = () => {
    Object.entries(window.localStorage).forEach((item) => {
      if (item[0].includes("struck-through"))
        window.localStorage.removeItem(item[0]);
    });
    //localStorage.clear();
    setUntoggleItems((currentstate) => !currentstate);
  };
  return (
    <StyledButtonsContainer>
      <TippyElement text="Clear all un-saved items from list">
        <IconButton type="shopping-list-button">
          <VscClearAll />
        </IconButton>
      </TippyElement>
      <TippyElement text="Reset all to un-selected">
        <IconButton
          type="shopping-list-button"
          onClick={() => clearItemsFromLocalStorage()}
        >
          <GrPowerReset />
        </IconButton>
      </TippyElement>
    </StyledButtonsContainer>
  );
}

export default ShoppingListButtons;
