import { Modal } from 'components/Modal';
import React from 'react';
import { useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const openModal = modalConfig => {
    setModalContent(modalConfig);
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };
  const valueModalProvider = {
    openModal,
    closeModal,
  };
  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};
