"use client"

import useModal from "@/src/features/modal/useModal";
import AuthModal from "./AuthModal";
import ConfirmationModal from "./ConfirmationModal";
import EditProfileModal from "./EditProfileModal";

const ModalRender = () => {
    const { isOpen, modalType, modalProps, closeModal, callback} = useModal();
  
    const renderModal = () => {
      if (modalType === "auth") {
        return <AuthModal onClose={closeModal} />;
      } else if (modalType === "confirmation") {
        return <ConfirmationModal onClose={closeModal} {...modalProps} back={callback}/>;
      }else if (modalType === "edit") {
        return <EditProfileModal onClose={closeModal} {...modalProps}/>;
      } else {
        return null;
      }
    };
  
    return <div>{isOpen && renderModal()}</div>;
  };
  
  export default ModalRender;
