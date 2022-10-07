import s from './Additives.module.scss';
export const Additives = ({ data, onModal }) => {
  return data.map(e => (
    <li
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.text, e.src)}
      className={s.item}
    >
      <img src={e.src} alt="" className={s.sizeImg} />
      <div>
        <div className={s.itemTitle}>
          <h3 className={s.title}>{e.title}</h3> <h3>{e.price}</h3>
        </div>
        <p>{e.text}</p>
      </div>{' '}
    </li>
  ));
};
