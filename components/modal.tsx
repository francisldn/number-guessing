import React from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

// bind modal for accessibility, see- https://www.npmjs.com/package/react-modal
Modal.setAppElement("#App");

export const ModalComponent: React.FC<ModalProps> = ({ isOpen, children }) => {
  return (
    <Modal isOpen={isOpen} style={modalStyles}>
      {children}
    </Modal>
  );
};
