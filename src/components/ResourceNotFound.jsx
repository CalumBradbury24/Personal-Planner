import styled from "styled-components";

const StyledMessage = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: var(--color-grey-500);
`;

function ResourceNotFound({ message }) {
  return <StyledMessage>{message}</StyledMessage>;
}

export default ResourceNotFound;
