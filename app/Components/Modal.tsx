import React from "react";

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, SetModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label onClick={() => SetModalOpen(false)} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </label>
      </div>
    </div>
  );
};

export default Modal;
