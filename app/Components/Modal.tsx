import React from "react";

interface ModalProps {
  modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </label>
      </div>
    </div>
  );
};

export default Modal;
