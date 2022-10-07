import { useEffect } from 'react';
import s from './Modal.module.scss'

export const Modal = ({ objectModal, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  const handleCloseBackdrop = e => {
    if (e.target.nodeName !== 'DIV') return;
    toggleModal();
  };

  return (
    <div className={s.backdrop} onClick={handleCloseBackdrop}>
      <div className={s.modal}>
        <h2>{objectModal.title}</h2>
        <h3>{objectModal.price}</h3>
        <div>{objectModal.text}</div>
        <img src={objectModal.src} alt={objectModal.title} />
      </div>
    </div>
  );
};
