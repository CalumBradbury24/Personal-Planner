import styled from "styled-components";
import ListItem from "./ListItem";
import { useShoppingList } from "./useShoppingList";
import Spinner from "../../components/Spinner";
import ResourceNotFound from "../../components/ResourceNotFound";

const StyledCardBody = styled.div`
  border-left: 1px solid var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-200);
  border-right: 1px solid var(--color-grey-200);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--color-grey-0);
`;

function List() {
  const { isLoading, error, shoppingList } = useShoppingList();

  if (isLoading) return <Spinner />;
  if (error)
    return console.warn("Error occurred fetching shopping list", error);
  if (!shoppingList.length)
    return (
      <ResourceNotFound message="There are currently no items in the shopping list." />
    );

  return (
    <StyledCardBody>
      {shoppingList.map((item) => {
        return <ListItem key={item.itemId} item={item} />;
      })}
    </StyledCardBody>
  );
}

export default List;
