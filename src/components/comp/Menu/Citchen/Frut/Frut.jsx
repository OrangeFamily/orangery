import s from './Frut.module.scss';
export const Frut = ({ data, onModal }) => {
  return data.map(e => (
    <div
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.text, e.src)}
      className={s.item}
    >
      <h3 className={s.title}>{e.title}</h3>

      <h3 className={s.price}>{e.price}</h3>
    </div>
  ));
};
