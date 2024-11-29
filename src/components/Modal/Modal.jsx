import React from 'react';
import PropTypes from 'prop-types';
import { ModalContent, ModalOverlay } from './Modal.styles';

function Modal({ children }) {
  return (
    <ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>
  );
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
