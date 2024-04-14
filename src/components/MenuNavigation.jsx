import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { BsCartCheckFill } from "react-icons/bs";
import { devices } from "../styles/styleConstants";

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    color: var(--color-grey-600);

    @media screen and ${devices.medium} {
      display: none;
    }
  }

  &:link,
  &:visited {
    font-weight: 500;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover span,
  &:active span,
  &.active:link span,
  &.active:visited span {
    color: var(--color-brand-700);
  }

  & svg {
    height: 1.5rem;
    width: 1.25rem;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

const menuItems = [
  {
    title: "Shopping List",
    icon: <CiBoxList />,
    route: "/shopping-list",
  },
  {
    title: "Saved List Items",
    icon: <BsCartCheckFill />,
    route: "/saved-items",
  },
];

/* 
Using react-routers NavLink element here so that a navigation
event doesnt refresh the entire page like for example using an <a href='/' /> tag would
*/
const renderMenuItem = (item) => {
  return (
    <StyledNavLink to={item.route}>
      {item.icon} <span>{item.title}</span>
    </StyledNavLink>
  );
};

function MenuNavigation() {
  return (
    <nav>
      <StyledUl>
        {menuItems.map((item) => {
          return <li key={item.title}>{renderMenuItem(item)}</li>;
        })}
      </StyledUl>
    </nav>
  );
}

export default MenuNavigation;
