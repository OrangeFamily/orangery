import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { useState } from 'react';

// import { Modal } from './Modal/Modal';
import s from './App.module.scss';

import { List } from './comp/List/List';


import MakiMass from './comp/Kitchen/Data/DataMaki'
import { ModalTwo } from './Modal/ModalTwo';
import AperetivMass from './comp/Bar/Data/DataAperetiv';
import RomMass from './comp/Bar/Data/DataRom';
import TekilaMass from './comp/Bar/Data/DataTekila';
import WiskeyMass from './comp/Bar/Data/DataWiskey';
import CognakMass from './comp/Bar/Data/DataCognak';
import LiqurMass from './comp/Bar/Data/DataLiqur';
import EgerMass from './comp/Bar/Data/DataEger';
import VodkaMass from './comp/Bar/Data/DataVodka';
import GinMass from './comp/Bar/Data/DataGin';
import VermutMass from './comp/Bar/Data/DataVermut';
import ShampanMass from './comp/Bar/Data/DataShampan';
import VineMass from './comp/Bar/Data/DataVine';
import BearMass from './comp/Bar/Data/DataBear';
import CoffeMass from './comp/Bar/Data/DataCoffe';
// import CoffeMilkMass from './comp/Bar/Data/DataCoffeMilk';
import CoffeColdMass from './comp/Bar/Data/DataCoffeCold';
import LimonadMass from './comp/Bar/Data/DataLimonad';
import BearToMass from './comp/Kitchen/Data/DataBearTo';
import AddMass from './comp/Bar/Data/DataAdd';
import DrinkMass from './comp/Bar/Data/DataDrink';
import FreshMass from './comp/Bar/Data/DataFresh';
import TeaMass from './comp/Bar/Data/DataTea';
import TeaColdMass from './comp/Bar/Data/DataTeaCold';
// import TeaMatchaMass from './comp/Bar/Data/DataTeaMatcha';
import TeaMaribelMass from './comp/Bar/Data/DataTeaMaribel';
import HotDrinkMass from './comp/Bar/Data/DataHotDrink';
import { Bear } from './comp/List/Bear';
import EnergyMass from './comp/Bar/Data/DataEnergy';
import { WithoutImg } from './comp/List/WithoutImg';
import UraMakiMass from './comp/Kitchen/Data/DataUraMaki';
import FutoMakiMass from './comp/Kitchen/Data/DataFutoMaki';
import NigiriMass from './comp/Kitchen/Data/DataNigiri';
import HotRolMass from './comp/Kitchen/Data/DataHotRol';
import SetMass from './comp/Kitchen/Data/DataSet';
// import SweetRolMass from './comp/Kitchen/Data/DataSweetRol';
import SaladChukaMass from './comp/Kitchen/Data/DataSaladChuka';
import DesertsMass from './comp/Kitchen/Data/DataDeserts';
import AsortiMass from './comp/Kitchen/Data/DataAsorti';
import { Modal } from './Modal/Modal';
import AuthMass from './comp/Cocotail/Data/DataAuth';
import ClasicMass from './comp/Cocotail/Data/DataClasic';
import MilkshakeMass from './comp/Cocotail/Data/DataMilkshake';
import NonAlkMass from './comp/Cocotail/Data/DataNonAlk';
import ShortDrinkMass from './comp/Cocotail/Data/DataShortDrink';
import { ListCoct } from './comp/List/ListCoct';
import Boul from './comp/Kitchen/Data/New';




export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [objectModal, setObjectModal] = useState({});

  
  const dataMaki = MakiMass
  const dataUramaki=UraMakiMass
  const dataFutomaki=FutoMakiMass
  const dataNigiri=NigiriMass
  const dataHotRol=HotRolMass
  const dataSet=SetMass
  // const dataSweetRol=SweetRolMass
  const dataChuka=SaladChukaMass
  const dataAsorti=AsortiMass
  const dataDesert=DesertsMass

  const dataAper=AperetivMass
  const dataRom=RomMass
  const dataTekilla=TekilaMass
  const dataWiskey=WiskeyMass
  const dataCognac=CognakMass
  const dataLiqure=LiqurMass
  const dataEger=EgerMass
  const dataVodka=VodkaMass
  const dataGin=GinMass
  const dataVermut=VermutMass
  const dataShamp=ShampanMass
  const dataVine=VineMass
  const dataBeer=BearMass
  const dataEnerg=EnergyMass
  const dataCoffe=CoffeMass
  // const dataCoffeMilk=CoffeMilkMass
  const dataCoffeCold=CoffeColdMass
  const dataLimonad=LimonadMass
  const dataBeerTo=BearToMass
  const dataAdd=AddMass
  const dataDrink=DrinkMass
  const dataFresh=FreshMass
  const dataTea=TeaMass
  const dataTeaCold=TeaColdMass
  // const dataTeaMatcha=TeaMatchaMass
  const dataTeaMaribel=TeaMaribelMass
  const dataHotDrink=HotDrinkMass
  
  const dataAuth=AuthMass;
  const dataClasic=ClasicMass;
  const dataMilkshake=MilkshakeMass
  const dataNonAlk=NonAlkMass
  const dataShortDrink=ShortDrinkMass

  const dataBoul=Boul


  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({title, price, text, src});
  };
  const dataModalBeer = (title, price, price2, text, src) => {
    toggleModal();
    setObjectModal({title, price, text, src});
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const dataModalTwo = (title, price, text, src) => {
    toggleModalTwo();
    setObjectModal({ title, price, text, src });
  };
  const toggleModalTwo = () => {
    setShowModalTwo(showModalTwo => !showModalTwo);
  };
  return (
    <>
      <div className={s.upper}>
        <header className={s.header}>
          <a
            href="https://misteram.com.ua/chernigov/orangery"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src={require('./img/am.png')} alt="" className={s.iconAm} /> */}
            <button className={s.iconAm}>ДОСТАВКА</button>
          </a>
          <a href="tel:+380936900699" className={s.tel}>
            <p className={s.telSize}>+38 093 69 00 699</p>
          </a>
          <a
            href="https://instagram.com/orangery.lounge?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src={require('./img/inst.png')} alt="" className={s.icon} />
          </a>
        </header>
        <section className={s.main}>
          
          <img
            src={require('./img/logoOrangery.png')}
            alt=""
            className={s.logo}
          />
          <Accordion allowMultiple>
            <AccordionItem className={s.itemList}>
              <h1 className={s.titleH}>
                <AccordionButton className={s.title}>Кухня</AccordionButton>
              </h1>
              <AccordionPanel>
                <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      суші-бургери
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataMaki} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Макі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataMaki} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Урамакі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataUramaki} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Футомакі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataFutomaki} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Суші нігірі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataNigiri} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Гарячі роли
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataHotRol} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Сети
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataSet} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Солодкі суші
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataSweetRol} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Боули NEW
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataBoul} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Салати з чука
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataChuka} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      До пива
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataBeerTo} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Асорті
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataAsorti} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Десерти
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataDesert} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={s.itemList}>
              <>
                <h1 className={s.titleH}>
                  <AccordionButton className={s.title}>Бар</AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      НАСТОЯНКИ & АПЕРИТИВИ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataAper} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      РОМ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataRom} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ТЕКІЛА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataTekilla} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ВІСКІ  & ТЕННЕССІ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataWiskey} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      КОНЬЯКИ  & БРЕНДІ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataCognac} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ЛІКЕРИ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataLiqure} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      КРИЖАНИЙ ШОТ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataEger} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ГОРІЛКА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataVodka} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ДЖИН
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataGin} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ВЕРМУТИ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataVermut} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ШАМПАНСЬКЕ & ІГРИСТІ ВИНА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataShamp} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ВИНА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataVine} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ПИВО
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Bear data={dataBeer} onModal={dataModalBeer} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ЕНЕРГЕТИК
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataEnerg} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      КАВА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataCoffe} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      КАВА З РОСЛИННИМ МОЛОКОМ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataCoffeMilk} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ХОЛОДНА КАВА
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataCoffeCold} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ЛИМОНАДИ
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataLimonad} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ДОПОВНЕННЯ 
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataAdd} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      НАПОЇ  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataDrink} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ФРЕШІ  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataFresh} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ЧАЙ  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataTea} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      ХОЛОДНІ ЧАЇ  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataTeaCold} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Чай Матча  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataTeaMatcha} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Айс Матча  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataTeaMatcha} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Натуральний чай Maribell  
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <WithoutImg data={dataTeaMaribel} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Зігріваючі напої
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataHotDrink} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>

            <AccordionItem className={s.itemList}>
              <>
                <h1 className={s.titleH}>
                  <AccordionButton className={s.title}>
                    Коктейлі
                  </AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Клаcика
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataClasic} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Авторські коктейлі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataAuth} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Мілкшейк
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataMilkshake} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Безалкогольні коктейлі
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataNonAlk} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                      Шоти
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <ListCoct data={dataShortDrink} onModal={dataModalTwo} />
                    </AccordionPanel>
                  </AccordionItem>
                  <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>
            {showModalTwo && (
              <ModalTwo objectModal={objectModal} toggleModal={toggleModalTwo} />
            )}
            {showModal && (
              <Modal objectModal={objectModal} toggleModal={toggleModal} />
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
};
