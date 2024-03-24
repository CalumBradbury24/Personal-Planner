import styled, { css } from "styled-components";

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  ${(props) =>
    props.type === "darkmode-button" &&
    css`
      font-size: 1.5rem;
      margin-left: auto;
      padding: 0.6rem;
      color: var(--color-yellow-700);
    `}

  ${(props) =>
    props.type === "search" &&
    css`
      padding: 10px;
    `}

  /* &:hover {
    background-color: var(--color-grey-100);
  } */

  > svg {
    cursor: pointer;
  }
`;

export default IconButton;
