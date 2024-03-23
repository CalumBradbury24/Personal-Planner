import styled from "styled-components";
import Logo from "./Logo";
import MenuNavigation from "./MenuNavigation";

const StyledSidebar = styled.aside`
  max-width: 300px;
  min-width: 150px;
  width: 20%;
  display: flex;
  flex-direction: column;

  border-right: 2px solid red;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MenuNavigation />
    </StyledSidebar>
  );
}

export default Sidebar;
