import IconButton from "../../components/IconButton";
import { GrPowerReset } from "react-icons/gr";
import { VscClearAll } from "react-icons/vsc";
import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding-right: 10px;
`;

function ShoppingListButtons() {
  return (
    <StyledButtonsContainer>
      <IconButton as="shopping-list-button">
        <VscClearAll />
      </IconButton>
      <IconButton as="shopping-list-button">
        <GrPowerReset />
      </IconButton>
    </StyledButtonsContainer>
  );
}

export default ShoppingListButtons;
// clear list
// untoggle all items
