import Tippy from "@tippyjs/react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTippyElement = styled.span`
  background-color: var(--color-indigo-700);
  color: var(--color-grey-0);
  padding: 10px;
  border-radius: 10px;
`;

TippyElement.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string,
};

function TippyElement({ children, text }) {
  return (
    <Tippy content={<StyledTippyElement>{text}</StyledTippyElement>}>
      {children}
    </Tippy>
  );
}

export default TippyElement;
