import styled from "styled-components";

const StyledButton = styled.button``;

function Button({ text, onClick, icon }) {
  return (
    <StyledButton onClick={onClick}>
      {icon ? icon : ""}
      {text}
    </StyledButton>
  );
}

export default Button;
