import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "./modalSlice";

const useModal = () => {
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleOpenModal = (modalType, modalProps) => {
    dispatch(openModal({ modalType, modalProps }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return {
    isOpen,
    modalType,
    modalProps,
    openModal: handleOpenModal,
    closeModal: handleCloseModal,
  };
};

export default useModal;
