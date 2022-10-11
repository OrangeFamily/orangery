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


import { List } from './comp/Bar/List/List';
import AperetivMass from './comp/Bar/Data/DataAperetiv';
import NarCoctMass from './comp/Bar/Data/DataNarCoct';
import RomMass from './comp/Bar/Data/DataRom';
import TekilaMass from './comp/Bar/Data/DataTekila';
import WiskeyMass from './comp/Bar/Data/DataWiskey';
import CognakMass from './comp/Bar/Data/DataCognak';
import LiqurMass from './comp/Bar/Data/DataLiqur';
import ShotMass from './comp/Bar/Data/DataShot';
import VodkaMass from './comp/Bar/Data/DataVodka';
import GinMass from './comp/Bar/Data/DataGin';
import ShampanMass from './comp/Bar/Data/DataShampan';
import VineMass from './comp/Bar/Data/DataVine';
import VermutMass from './comp/Bar/Data/DataVermut';
import BearMass from './comp/Bar/Data/DataBear';
import CoffeMass from './comp/Bar/Data/DataCoffe';
import TeaMass from './comp/Bar/Data/DataTea';
import DrinkMass from './comp/Bar/Data/DataDrink';
import EnergyMass from './comp/Bar/Data/DataEnergy';
import AddMass from './comp/Bar/Data/DataAdd';




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
  const dataCognak=CognakMass;
  const dataLiqur=LiqurMass;
  const dataShot=ShotMass;
  const dataVodka=VodkaMass;
  const dataGin=GinMass;
  const dataShampan=ShampanMass;
  const dataVine=VineMass;
  const dataVermut= VermutMass
  const dataBear=BearMass
  const dataCoffe=CoffeMass
  const dataTea=TeaMass
  const dataDrink=DrinkMass
  const dataEnergy=EnergyMass
  const dataAdd=AddMass

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
                        <List data={dataNarCoct} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Настоянки & Аперитиви
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataAperetiv} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Ром
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataRom} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Текіла №1 в світі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataTekila} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Віскі & Теннессі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataWiskey} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Коньяки & Бренді
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataCognak} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Лікери
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataLiqur} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Крижаний шот
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataShot} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Горілка
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVodka} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Джин
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataGin} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Шампанське & Игристі вина
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataShampan} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Вина
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVine} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Вермути
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVermut} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Пиво
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataBear} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Напої
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataDrink} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Кава
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataCoffe} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Чай
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataTea} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Енергетик
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataEnergy} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Доповнення
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataAdd} onModal={dataModal} />
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
