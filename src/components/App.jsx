import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { useState } from 'react';

import { Modal } from './Modal/Modal';
import s from './App.module.scss';
import { MeatAss } from './comp/Menu/Citchen/MeatAss/MeatAss';
import MeatAssMass from './comp/Menu/Citchen/MeatAss/DataMeatAss';
import { Salads } from './comp/Menu/Citchen/Salads/Salads';
import SaladsMass from './comp/Menu/Citchen/Salads/DataSalads';
import FrutMass from './comp/Menu/Citchen/Frut/DataFrut';
import { Frut } from './comp/Menu/Citchen/Frut/Frut';
import { Burgers } from './comp/Menu/Citchen/Burgers/Burgers';
import BurgerMass from './comp/Menu/Citchen/Burgers/DataBurg';
import HotMass from './comp/Menu/Citchen/Hot/DataHot';
import { Hot } from './comp/Menu/Citchen/Hot/Hot';
import { NarCoct } from './comp/Menu/Bar/NarCoct/NarCoct';
import NarCoctMass from './comp/Menu/Bar/NarCoct/DataNarCoct';
import AperetivMass from './comp/Menu/Bar/Aperetiv/DataAperetiv';
import { Aperetiv } from './comp/Menu/Bar/Aperetiv/Aperetiv';
import RomMass from './comp/Menu/Bar/Rom/DataRom';
import { Rom } from './comp/Menu/Bar/Rom/Rom';
import TekilaMass from './comp/Menu/Bar/Tekila/DataTekila';
import { Tekila } from './comp/Menu/Bar/Tekila/Tekila';
import WiskeyMass from './comp/Menu/Bar/Wiskey/DataWiskey';
import { Wiskey } from './comp/Menu/Bar/Wiskey/Wiskey';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});

  const dataFrut = FrutMass;
  const dataBurgers = BurgerMass;
  const dataMeatAss = MeatAssMass;
  const dataSalads = SaladsMass;
  const dataHot = HotMass;

  const dataNarCoct = NarCoctMass;
  const dataAperetiv = AperetivMass;
  const dataRom = RomMass;
  const dataTekila = TekilaMass;
  const dataWiskey = WiskeyMass;

  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({ title, price, text, src });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <>
      <div className={s.upper}>
        <header className={s.header}>
          <a
            href="https://misteram.com.ua/chernigov/orangebar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('./img/am.png')} alt="" className={s.iconAm} />
          </a>
          <a href="tel:+380939179177" className={s.tel}>
            <p className={s.telSize}>+38 093 91 79 177</p>
          </a>
          <a
            href="https://instagram.com/orange.bar_club?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src={require('./img/inst.png')} alt="" className={s.icon} />
          </a>
        </header>
        <section className={s.main}>
          <img
            src={require('./img/orangeLogo.png')}
            alt=""
            className={s.logo}
          />
          <Accordion allowMultiple>
            <AccordionItem>
              <h1>
                <AccordionButton className={s.title}>Кухня</AccordionButton>
              </h1>
              <AccordionPanel>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Фруктова нарізка
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Frut data={dataFrut} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        М'ясне та сирне асорті
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <MeatAss data={dataMeatAss} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Салати
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Salads data={dataSalads} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Бургери
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Burgers data={dataBurgers} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Гарячі закуски
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Hot data={dataHot} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>Бар</AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Народні коктейлі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <NarCoct data={dataNarCoct} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Настоянки & Аперитиви
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Aperetiv data={dataAperetiv} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Ром
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Rom data={dataRom} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Текіла №1 в світі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Tekila data={dataTekila} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Віскі & Теннессі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Wiskey data={dataWiskey} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>
            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>
                    Коктейлі
                  </AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Фруктова нарізка
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Frut data={dataFrut} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          М'ясне та сирне асорті
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <MeatAss data={dataMeatAss} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Салати
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Salads data={dataSalads} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Бургери
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Burgers data={dataBurgers} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Гарячі закуски
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Hot data={dataHot} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>
            {showModal && (
              <Modal objectModal={objectModal} toggleModal={toggleModal} />
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
};
