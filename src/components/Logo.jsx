import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { devices } from "../styles/styleConstants";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;

  @media screen and ${devices.medium} {
    padding: 10px 0 30px 0;
  }
`;

const Img = styled.img`
  height: 70px;
  ${(props) =>
    props.darkmode &&
    css`
      filter: invert(1);
    `}

  @media screen and ${devices.medium} {
    height: 25px;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img src="/home.svg" alt="Logo" darkmode={isDarkMode ? "darkmode" : ""} />
    </StyledLogo>
  );
}

export default Logo;
