import React, { Component } from "react";
import "./ModalDialog.css";
import logo from '../logo.png'
class ModalDialog extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.props.modalDialog} handleClose={this.props.handleClose}>
          <h3>Well done !</h3>
          <div className="photoField">
          <img src={logo} className="photo" alt="Logo" />
          </div>
          <p>U have been successfuly added book in library.</p>
        </Modal>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children,}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}
 className="closeModalBtn">
          Add new book
        </button>
      </section>
    </div>
  );
};

export default ModalDialog;
