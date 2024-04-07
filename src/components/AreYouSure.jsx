import styled from "styled-components";

const StyledP = styled.p`
  color: var(--color-grey-900);
`;

function AreYouSure({ text, children }) {
  return (
    <div>
      <StyledP>{text}</StyledP>
      {children}
    </div>
  );
}

export default AreYouSure;
