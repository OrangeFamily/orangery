export const Garnish = ({data, onModal}) => {

    return data.map(e=>(
     
        <li key={e.id} onClick={()=>onModal(e.title, e.price, e.text, e.src)}>{e.title}</li>
    
      
    ));
    };