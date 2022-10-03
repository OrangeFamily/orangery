import { ModalContext } from "components/context";
import { useContext } from "react";

export const Coctails = () => {
    const { openModal } = useContext(ModalContext);
  
    const handleClickFirstBtn = () => {
      openModal({
        title: 'pinacolada',
        price: '130grn',
        text: 'tekila',
        img: (
          <img src={require('../images/sunflower.jpg')} alt="" className="coct" />
        ),
      });
    };
    const handleClickSecondBtn = () => {
      openModal({
        title: 'cuba libre',
        price: '250grn',
        text: 'vodka',
        img: <img src={require('../images/123123.png')} alt="" className="coct" />,
      });
    };
    const handleClickThirdBtn = () => {
      openModal({
        title: 'mohito',
        price: '155',
        text: 'rom',
        img: <img src={require('../images/img.png')} alt="" className="coct" />,
      });
    };
  
    return (
      <>
        <div className="section">
        <h1 className="title">Коктейли</h1>
        <button onClick={handleClickFirstBtn}>
          <img src={require('../images/img.png')} alt="" className="wBtn" />
          <span>Кухня</span>
        </button>
        <button onClick={handleClickSecondBtn}>
          <img src={require('../images/img.png')} alt="" className="wBtn" />
          <span>Кухня</span>
        </button>
        <button onClick={handleClickThirdBtn}>
          <img src={require('../images/img.png')} alt="" className="wBtn" />
          <span>Кухня</span>
        </button>
        </div>
        
      </>
    );
  };
  