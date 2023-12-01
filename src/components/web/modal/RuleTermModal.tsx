import React from "react";
import ReactModal from "react-modal";

const RuleTermModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    ></ReactModal>
  );
};

export default RuleTermModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "90%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    alignItems: "center",
    // overflow: "auto",
  },
};
