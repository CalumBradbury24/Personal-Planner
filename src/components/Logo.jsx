import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const Img = styled.img`
  height: 70px;
  ${(props) =>
    props.darkmode &&
    css`
      filter: invert(1);
    `}
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
