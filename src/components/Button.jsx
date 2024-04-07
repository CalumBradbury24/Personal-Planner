import styled, { css } from "styled-components";

const variations = {
  okay: css`
    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  cancel: css`
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: var(--color-grey-200);
  padding: 10px 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  ${(props) => variations[props.variation]}
`;

const StyledP = styled.p`
  color: var(--color-blue-700);
`;

function Button({ text, onClick, icon, variation }) {
  return (
    <StyledButton onClick={onClick} variation={variation}>
      <StyledP>{text}</StyledP>
      {icon ? icon : ""}
    </StyledButton>
  );
}

export default Button;
