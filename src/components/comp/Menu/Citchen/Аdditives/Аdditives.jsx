export const Additives = ({data, onModal}) => {

    return data.map(e=>(
      <ul key={e.id}>
        <li  onClick={()=>onModal(e.title, e.price, e.text, e.src)}>{e.title}</li>
      </ul>
      
    ));
    };