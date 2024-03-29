import IconButton from "../../components/IconButton";
import { GrPowerReset } from "react-icons/gr";
import { VscClearAll } from "react-icons/vsc";

import styled from "styled-components";
import TippyElement from "../../components/Tippy";

const StyledButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding-right: 10px;
`;

function ShoppingListButtons({ setUntoggleItems }) {
  const clearItemsFromLocalStorage = () => {
    localStorage.clear();
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
