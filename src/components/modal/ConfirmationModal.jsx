import styled from "styled-components";
import Typography from "../display/Typography";
import { Button } from "../buttons/button";

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
  gap: 16px;

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
        <Typography variant="h1" style={{ color:"red" }}>{title}</Typography>
        <p>{message}</p>

        <div style={{ display: "flex", justifyContent:"center", gap:"15px" }}>
          <Button style={{color: "white"}} onClick={handleCancel}>Cancelar</Button>
          <Button style={{backgroundColor: "red" }} onClick={handleConfirm}>Confirmar</Button>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default ConfirmationModal;
