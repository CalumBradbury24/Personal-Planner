import styled from "styled-components";
import { FaSearchPlus } from "react-icons/fa";
import IconButton from "../../components/IconButton";

const StyledInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  grid-column: 2;
`;

const StyledInput = styled.input`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: var(--backdrop-color);
  width: 250px;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: width 400ms ease-in-out;

  &:focus {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
    width: 280px;
    transition: width 400ms ease-in-out;
  }
  &:hover {
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
    width: 280px;
    transition: width 400ms ease-in-out;
  }
`;

function ShoppingInput() {
  return (
    <StyledInputContainer>
      <StyledInput />
      <IconButton type="search">
        <FaSearchPlus />
      </IconButton>
    </StyledInputContainer>
  );
}

export default ShoppingInput;
