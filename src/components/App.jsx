import React from "react";
import { useState } from "react";
import AdditivesMass from "./comp/Menu/Citchen/Аdditives/Additives";
import { Additives } from "./comp/Menu/Citchen/Аdditives/Аdditives";
// import s from './App.module.css'

import { Modal } from "./Modal/Modal";

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

  const dataAdd = AdditivesMass
 
    return (
      <>
   
      
      <Additives data={dataAdd} onModal={dataModal}/>
      {showModal && <Modal objectModal={objectModal} toggleModal={toggleModal}/>}
      </>
    )
  }
