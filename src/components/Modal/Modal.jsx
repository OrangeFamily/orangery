import { useEffect } from 'react';
import './style.css';

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
    <div className="backdrop" onClick={handleCloseBackdrop}>
      <div className="modal">
        <div>{objectModal.title}</div>
        <div>{objectModal.price}</div>
        <div>{objectModal.text}</div>
        <img src={objectModal.src} alt={objectModal.title} />
      </div>
    </div>
  );
};
