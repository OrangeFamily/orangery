import React from 'react';

import { useState } from 'react';
import { Burgers } from './comp/Menu/Citchen/Burgers/Burgers';
import BurgerMass from './comp/Menu/Citchen/Burgers/DataBurg';

import AdditivesMass from './comp/Menu/Citchen/Аdditives/DataAdd';
import { Additives } from './comp/Menu/Citchen/Аdditives/Аdditives';

import './style.css';

import { Modal } from './Modal/Modal';
import { Cold } from './comp/Menu/Citchen/Cold/Cold';
import ColdMass from './comp/Menu/Citchen/Cold/DataCold';
import DesertsMass from './comp/Menu/Citchen/Deserts/DataDeserts';
import { Deserts } from './comp/Menu/Citchen/Deserts/Deserts';
import { First } from './comp/Menu/Citchen/First/First';
import FirstMass from './comp/Menu/Citchen/First/DataFirst';
import { Garnish } from './comp/Menu/Citchen/Garnish/Garnish';
import GarnishMass from './comp/Menu/Citchen/Garnish/DataGarnish';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});
  const [kithenState, setKitchenState] = useState(false);
  const [barState, setBarState] = useState(false);
  const [coctState, setCoctState] = useState(false);
  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({ title, price, text, src });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const handleClickKitchen = () => {
    setKitchenState(kithenState => !kithenState);
  };
  let toggleKitchen = kithenState ? 'hide' : '';
  let toggleKitchenOff = kithenState ? 'hideOff' : '';

  const handleClickBar = () => {
    setBarState(barState => !barState);
  };
  let toggleBar = barState ? 'hideBar' : '';
  let toggleBarOff = barState ? 'hideBarOff' : '';

  const handleClickCoct = () => {
    setCoctState(coctState => !coctState);
  };
  let toggleCoct = coctState ? 'hideCoct' : '';

  const dataAdd = AdditivesMass;
  const dataBurg = BurgerMass;
  const dataCold = ColdMass;
  const dataDeserts = DesertsMass;
  const dataFirst = FirstMass;
  const dataGarnish = GarnishMass;

  return (
    <>
      <section className="main">
        <h1 onClick={handleClickKitchen}>Кухня</h1>
        <div className="overlay">
          <div className={`menu ${toggleKitchen}`}>
            <Cold data={dataCold} onModal={dataModal} />
            <Additives data={dataAdd} onModal={dataModal} />
            <Burgers data={dataBurg} onModal={dataModal} />
            <Deserts data={dataDeserts} onModal={dataModal} />
            <First data={dataFirst} onModal={dataModal} />
            <Garnish data={dataGarnish} onModal={dataModal} />

          </div>

          <div className={`for ${toggleKitchenOff}`}>
            <h1 onClick={handleClickBar}>Бар</h1>
            <div className="overlay">
              <div className={`menu ${toggleBar}`}>
                <Cold data={dataCold} onModal={dataModal} />
                <Additives data={dataAdd} onModal={dataModal} />
                <Burgers data={dataBurg} onModal={dataModal} />
                <Deserts data={dataDeserts} onModal={dataModal} />
              </div>
            </div>
          </div>
          <div className={`for ${toggleKitchenOff}`}>
            <div className={`for ${toggleBarOff}`}>
              <h1 onClick={handleClickCoct}>Коктейлі</h1>
              <div className="overlay">
                <div className={`menu ${toggleCoct}`}>
                  <Cold data={dataCold} onModal={dataModal} />
                  <Additives data={dataAdd} onModal={dataModal} />
                  <Burgers data={dataBurg} onModal={dataModal} />
                  <Deserts data={dataDeserts} onModal={dataModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <Modal objectModal={objectModal} toggleModal={toggleModal} />
      )}
    </>
  );
};
