import { useEffect } from "react"
import { createPortal } from "react-dom"

const modalRoot = document.getElementById('modal-root')

const Modal = ({ children, onCloseModal }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyEsc);
        return () => {
            window.removeEventListener('keydown', handleKeyEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyEsc = e => {
        if (e.code === 'Escape') {
            onCloseModal();
        }
    };
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            onCloseModal()
        }
    }
    return createPortal(
        <div className="backdrop" onClick={handleCloseModal}>
            <div className="modal">
                {children}
            </div>
        </div>,
        modalRoot
    )
}

export default Modal