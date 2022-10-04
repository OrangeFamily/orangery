import React from 'react';

import { useState } from 'react';
import { Burgers } from './comp/Menu/Citchen/Burgers/Burgers';
import BurgerMass from './comp/Menu/Citchen/Burgers/DataBurg';

import AdditivesMass from './comp/Menu/Citchen/Аdditives/DataAdd';
import { Additives } from './comp/Menu/Citchen/Аdditives/Аdditives';

import s from './App.module.css';
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
  let toggleKitchen = kithenState ? 'den' : '';

  const handleClickBar = () => {
    setBarState(barState => !barState);
  };
  let toggleBar = barState ? 'hidden' : '';

  const dataAdd = AdditivesMass;
  const dataBurg = BurgerMass;
  const dataCold = ColdMass;
  const dataDeserts = DesertsMass;
  const dataFirst = FirstMass;
  const dataGarnish = GarnishMass;

  return (
    <>
      <section className={s.main}>
        <h1 onClick={handleClickKitchen} className={s.title}>
          Кухня
        </h1>

        <div className="heed">
          <div className={`test ${toggleKitchen}`}>
            <div className={s.section}>
              <div className={s.item}>
                <h3>Добавки</h3>
                <ul className={s.list}>
                  <Additives data={dataAdd} onModal={dataModal} />
                </ul>
              </div>
              <div className={s.item}>
                <h3>Бургери</h3>
                <ul className={s.list}>
                  <Burgers data={dataBurg} onModal={dataModal} />
                </ul>
              </div>
            </div>
            <div className={s.section}>
              <div className={s.item}>
                <h3>Холодні закуски</h3>
                <ul className={s.list}>
                  <Cold data={dataCold} onModal={dataModal} />
                </ul>
              </div>
              <div className={s.item}>
                <h3>Десерти</h3>
                <ul className={s.list}>
                  <Deserts data={dataDeserts} onModal={dataModal} />
                </ul>
              </div>
            </div>
            <div className={s.section}>
              <div className={s.item}>
                <h3>Перші страви</h3>
                <ul className={s.list}>
                  <First data={dataFirst} onModal={dataModal} />
                </ul>
              </div>
              <div className={s.item}>
                <h3>Гарніри</h3>
                <ul className={s.list}>
                  <Garnish data={dataGarnish} onModal={dataModal} />
                </ul>
              </div>
            </div>
          </div>
          <div className={`test ${toggleKitchen}`}>
            <h1 onClick={handleClickBar} className={s.title}>
              Bar
            </h1>
            <div className={s.heed}>
              <div className={s.section}>
                <div className={s.item}>
                  <h3>Добавки</h3>
                  <ul className={s.list}>
                    <Additives data={dataAdd} onModal={dataModal} />
                  </ul>
                </div>
                <div className={s.item}>
                  <h3>Бургери</h3>
                  <ul className={s.list}>
                    <Burgers data={dataBurg} onModal={dataModal} />
                  </ul>
                </div>
              </div>
              <div className={s.section}>
                <div className={s.item}>
                  <h3>Холодні закуски</h3>
                  <ul className={s.list}>
                    <Cold data={dataCold} onModal={dataModal} />
                  </ul>
                </div>
                <div className={s.item}>
                  <h3>Десерти</h3>
                  <ul className={s.list}>
                    <Deserts data={dataDeserts} onModal={dataModal} />
                  </ul>
                </div>
              </div>
              <div className={s.section}>
                <div className={s.item}>
                  <h3>Перші страви</h3>
                  <ul className={s.list}>
                    <First data={dataFirst} onModal={dataModal} />
                  </ul>
                </div>
                <div className={s.item}>
                  <h3>Гарніри</h3>
                  <ul className={s.list}>
                    <Garnish data={dataGarnish} onModal={dataModal} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`test ${toggleKitchen}`}>
            <div className={`coct ${toggleBar}`}>
              <h1
                // onClick={handleClickBar}
                className={s.title}
              >
                Coctails
              </h1>
              <div className={s.heed}>
                <div className={s.section}>
                  <div className={s.item}>
                    <h3>Добавки</h3>
                    <ul className={s.list}>
                      <Additives data={dataAdd} onModal={dataModal} />
                    </ul>
                  </div>
                  <div className={s.item}>
                    <h3>Бургери</h3>
                    <ul className={s.list}>
                      <Burgers data={dataBurg} onModal={dataModal} />
                    </ul>
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.item}>
                    <h3>Холодні закуски</h3>
                    <ul className={s.list}>
                      <Cold data={dataCold} onModal={dataModal} />
                    </ul>
                  </div>
                  <div className={s.item}>
                    <h3>Десерти</h3>
                    <ul className={s.list}>
                      <Deserts data={dataDeserts} onModal={dataModal} />
                    </ul>
                  </div>
                </div>
                <div className={s.section}>
                  <div className={s.item}>
                    <h3>Перші страви</h3>
                    <ul className={s.list}>
                      <First data={dataFirst} onModal={dataModal} />
                    </ul>
                  </div>
                  <div className={s.item}>
                    <h3>Гарніри</h3>
                    <ul className={s.list}>
                      <Garnish data={dataGarnish} onModal={dataModal} />
                    </ul>
                  </div>
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
