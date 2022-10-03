import React from 'react';
import { useState } from 'react';
import { Burgers } from './comp/Menu/Citchen/Burgers/Burgers';
import BurgerMass from './comp/Menu/Citchen/Burgers/DataBurg';

import AdditivesMass from './comp/Menu/Citchen/Аdditives/DataAdd';
import { Additives } from './comp/Menu/Citchen/Аdditives/Аdditives';

import s from './App.module.css';

import { Modal } from './Modal/Modal';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});

  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({ title, price, text, src });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const dataAdd = AdditivesMass;
  const dataBurg = BurgerMass;

  return (
    <>
    <section className={s.main}>
      <div className={s.section}>
        <ul>
          <Additives data={dataAdd} onModal={dataModal} />
        </ul>
        <ul>
          <Burgers data={dataBurg} onModal={dataModal} />
        </ul>
      </div>
    </section>
      

      {showModal && (
        <Modal objectModal={objectModal} toggleModal={toggleModal} />
      )}
    </>
  );
};
