
// import AdditivesMass from "./Additives";


export const Additives = ({data, onModal}) => {

    
  
    return data.map(e=>(
      <ul>
        <li key={e.id} onClick={()=>onModal(e.title, e.price, e.text, e.src)}>{e.title}</li>
        {/* <li>
          <img src={require('./images/123123.png')} alt="" />
        </li> */}
      </ul>
      
    ));
    };