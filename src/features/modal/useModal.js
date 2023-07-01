import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from "./modalSlice"

const useModal = () => {
    const isOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal())
    };

    return {
        isOpen,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
    }
}

export default useModal