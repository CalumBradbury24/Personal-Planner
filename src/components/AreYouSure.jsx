import styled from "styled-components";
import { devices } from "../styles/styleConstants";

const StyledP = styled.p`
  color: var(--color-grey-900);
`;

const StyledDiv = styled.div`
  @media screen and ${devices.medium} {
    font-size: 16px;
  }
`;

function AreYouSure({ text, children }) {
  return (
    <StyledDiv>
      <StyledP>{text}</StyledP>
      {children}
    </StyledDiv>
  );
}

export default AreYouSure;
