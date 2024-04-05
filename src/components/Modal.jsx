import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { createPortal } from "react-dom";
import IconButton from "./IconButton";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

//Original way of rendering the modal
function Modal({ children, onCloseModal, type = "" }) {
  return createPortal(
    <Overlay>
      <StyledModal
        style={type === "modal-spinner" ? { left: "56%", top: "35%" } : {}}
      >
        {type !== "modal-spinner" && (
          <IconButton type="close-modal" onClick={() => onCloseModal()}>
            <HiXMark />
          </IconButton>
        )}
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
