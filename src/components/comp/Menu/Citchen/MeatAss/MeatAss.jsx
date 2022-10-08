import s from './MeatAss.module.scss';
export const MeatAss = ({ data, onModal }) => {
  return data.map(e => (
    <li
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.text, e.src)}
      className={s.item}
    >
      <img src={e.src} alt="" className={s.sizeImg} />

      <h3 className={s.title}>{e.title}</h3>

      <h3 className={s.price}>{e.price}</h3>

      <p>{e.text}</p>
    </li>
  ));
};
