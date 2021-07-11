import React from "react";
import Modal from "react-modal";
import "./Modal.css"
import { modalStatus, hideModal } from "../../features/modal/modal";
import { useSelector, useDispatch } from "react-redux";
const customStyles = {
  content: {
    width:"40%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: '2px solid blue',
    borderRadius:'5px',
  }
};
const AlertModal: React.FC = () => {
  const modalIsOpen = useSelector(modalStatus);
  const disapatch = useDispatch();
  function closeModal() {
    disapatch(hideModal());
  }
  return (
    <div className="modal-main">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className = "modal-head">
        <p>I am modal</p>
        </div>
        <div className="modal-content">
          this is main content
        </div>
       <div className="modal-footer">
       <button className="modal-btn"
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </button>
       </div>
      </Modal>
    </div>
  );
};
export default AlertModal;
