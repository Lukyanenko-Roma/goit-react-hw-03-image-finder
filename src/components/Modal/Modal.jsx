import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';


export default class Modal extends Component {
  overlayRef = createRef();

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

  handleKeyPressESC = e => {
    if (e.keyCode === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    const { currentTarget, target } = this.overlayRef;
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        <div onClick={this.handleBackdropClick} className="Overlay">
        <div className="Modal">
          <img className="Modal-img" src={this.props.src} alt="" />
        </div>
      </div>,
      </>
    );
  }
}



