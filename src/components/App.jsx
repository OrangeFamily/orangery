import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Burgers } from './comp/Menu/Citchen/Burgers/Burgers';
import BurgerMass from './comp/Menu/Citchen/Burgers/DataBurg';
import { Cold } from './comp/Menu/Citchen/Cold/Cold';
import ColdMass from './comp/Menu/Citchen/Cold/DataCold';
import AdditivesMass from './comp/Menu/Citchen/Аdditives/DataAdd';
import { Additives } from './comp/Menu/Citchen/Аdditives/Аdditives';
import { Modal } from './Modal/Modal';
import './style.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});
  const dataAdd = AdditivesMass;
  const dataCold = ColdMass;
  const dataBurg = BurgerMass;
  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({ title, price, text, src });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <section className="main">
      <Accordion allowMultiple>
        <AccordionItem>
          <h1>
            <AccordionButton className="title">Кухня</AccordionButton>
          </h1>
          <AccordionPanel>
            <div className="section">
              <ul>
                <Additives data={dataAdd} onModal={dataModal} />
              </ul>
              <ul>
                <Burgers data={dataBurg} onModal={dataModal} />
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <>
            <h1>
              <AccordionButton className="title">Бар</AccordionButton>
            </h1>
            <AccordionPanel>
              <div className="section">
                <ul>
                  <Cold data={dataCold} onModal={dataModal} />
                </ul>
              </div>
            </AccordionPanel>
          </>
        </AccordionItem>
        {showModal && (
          <Modal objectModal={objectModal} toggleModal={toggleModal} />
        )}
      </Accordion>
    </section>
  );
};
