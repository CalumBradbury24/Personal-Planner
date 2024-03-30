import styled from "styled-components";
import AddItem from "../features/shopping-list/AddItem";
import ShoppingListButtons from "../features/shopping-list/ShoppingListButtons";
import List from "../features/shopping-list/List";
import { useState } from "react";

const StyledCard = styled.div`
  width: 75%;
  margin: 5px;
`;

const StyledCardHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  border: 1px solid var(--color-grey-200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--color-brand-500);
`;

function ShoppingList() {
  const [untoggleItems, setUntoggleItems] = useState(false);

  return (
    <StyledCard>
      <StyledCardHeading>
        <AddItem />
        <ShoppingListButtons setUntoggleItems={setUntoggleItems} />
      </StyledCardHeading>
      <List />
    </StyledCard>
  );
}

export default ShoppingList;
