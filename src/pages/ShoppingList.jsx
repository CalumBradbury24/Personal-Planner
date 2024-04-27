import { useState } from "react";
import styled from "styled-components";

import ShoppingListButtons from "../features/shopping-list/ShoppingListButtons";
import List from "../features/shopping-list/List";
import AddItemInput from "../features/shopping-list/AddItemInput";

import { devices } from "../styles/styleConstants";

const StyledCard = styled.div`
  width: 75%;
  margin: 5px;

  @media screen and ${devices.medium} {
    width: 100%;
  }
`;

const StyledCardHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  border: 1px solid var(--color-grey-200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--color-brand-500);
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and ${devices.medium} {
    grid-template-columns: auto 1fr 1fr;
  }
`;

function ShoppingList() {
  const [untoggleItems, setUntoggleItems] = useState(false);

  return (
    <StyledCard>
      <StyledCardHeading>
        <AddItemInput />
        <ShoppingListButtons setUntoggleItems={setUntoggleItems} />
      </StyledCardHeading>
      <List />
    </StyledCard>
  );
}

export default ShoppingList;
