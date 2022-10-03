// import s from './Burgers.module.css'
export const Burgers = ({data, onModal}) => {

    return data.map(e=>(
     
        <li key={e.id} onClick={()=>onModal(e.title, e.price, e.text, e.src)}>{e.title}</li>
    
      
    ));
    };