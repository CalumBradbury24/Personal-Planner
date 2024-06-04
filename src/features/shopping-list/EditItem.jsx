import IconButton from "../../components/IconButton";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useShoppingListItem } from "./useShoppingListItem";
import styled from "styled-components";

import { TiDelete } from "react-icons/ti";
import ResourceNotFound from "../../components/ResourceNotFound";
import Spinner from "../../components/Spinner";

const EditItemWrapper = styled.div`
  margin: 5px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ItemName = styled.h2`
  grid-column: 2;
  text-align: center;
`;

const StyledIconButton = styled(IconButton)`
  width: fit-content;
  margin-left: auto;
  margin-right: 5px;
`;

function EditItem() {
  const { isLoading, error, item } = useShoppingListItem();
  const moveBack = useMoveBack(); // an X in corner to return to the list screen

  if (error) return <ResourceNotFound message="Item not found" />;
  if (isLoading) return <Spinner type="section-spinner" />;

  const { name, colour, quantity, categoryType } = item;

  return (
    <EditItemWrapper>
      <HeaderWrapper>
        <ItemName>{name}</ItemName>
        <StyledIconButton>
          <TiDelete onClick={moveBack} />
        </StyledIconButton>
      </HeaderWrapper>
    </EditItemWrapper>
  );
}

export default EditItem;
