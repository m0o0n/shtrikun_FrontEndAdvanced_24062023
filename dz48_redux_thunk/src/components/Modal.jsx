
import { createPortal } from "react-dom"
const modalRoot = document.getElementById('modal-root')
const Modal = ({children, handleClose, isOpen}) => {
    const handleCloseModal = (e) => {
        if(e.target === e.currentTarget) handleClose(false)
    }
    return createPortal(
        isOpen 
        ? <div className="modal_backdrop" onClick={handleCloseModal}>
            <div className="modal_card">
                {children}
            </div>
        </div>
        : null, modalRoot
    )
}

export default Modal