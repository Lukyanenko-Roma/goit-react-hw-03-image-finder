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
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
		if (event.currentTarget === event.target) {
			this.props.onClose()
		};
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



