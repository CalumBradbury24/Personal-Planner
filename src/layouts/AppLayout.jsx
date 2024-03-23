import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const StyledAppLayout = styled.div`
  display: flex;
  flex: 1;
  margin: 10px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const StyledSection = styled.section`
  background-color: var(--color-grey-50);
  flex: 1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <StyledMain>
        <Header />
        <StyledSection>
          <Outlet />
        </StyledSection>
      </StyledMain>
    </StyledAppLayout>
  );
}
// Side bar is collapsed on small screens
export default AppLayout;
