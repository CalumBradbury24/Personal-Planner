import styled from "styled-components";
import Logo from "./Logo";
import MenuNavigation from "./MenuNavigation";

import { devices } from "../styles/styleConstants";

const StyledSidebar = styled.aside`
  max-width: 300px;
  min-width: 150px;
  width: 20%;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.medium} {
    width: unset;
    min-width: unset;
  }
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
