import s from './Burgers.module.css'
export const Burgers = ({data, onModal}) => {

    return data.map(e=>(
      <ul className={s.item} key={e.id}>
        <li  onClick={()=>onModal(e.title, e.price, e.text, e.src)}>{e.title}</li>
      </ul>
      
    ));
    };