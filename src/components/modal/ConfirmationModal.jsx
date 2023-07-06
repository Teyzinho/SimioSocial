import styled from "styled-components";
import { AiOutlineClose } from "react-icons/Ai";

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: #00000040;
`;

const Modal = styled.div`
  position: relative;
  width: 400px;
  height: fit-content;
  border-radius: 5px;
  background-color: #212226;
  padding: 25px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
`;

const ConfirmationModal = ({ title, message, onClose, callback }) => {
  const handleConfirm = () => {
    callback(true);
    onClose();
  };

  const handleCancel = () => {
    callback(false);
    onClose();
  };

  return (
    <ModalContainer>
      <Modal>
        <p>{title}</p>
        <p>{message}</p>

        <div style={{ display: "flex" }}>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleConfirm}>Confirmar</button>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default ConfirmationModal;
