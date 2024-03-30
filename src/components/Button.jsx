import styled from "styled-components";

const StyledButton = styled.button``;

function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
