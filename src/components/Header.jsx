import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  display: flex;
`;

function Header() {
  return (
    <StyledHeader>
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
