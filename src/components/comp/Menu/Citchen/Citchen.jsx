import '../style.css';
import { Burgers } from './Burgers/Burgers';
import { Cold } from './Cold/Cold';
import { Deserts } from './Deserts/Deserts';
import { Additives } from './Аdditives/Аdditives';

export const Citchen = () => {
  return (
    <>
      <div className="section">
        <h1 className="title">Кухня</h1>
        <div className="flex">
          <Additives />
          <Burgers />
        </div>
        <div className="flex">
          <Cold/>
          <Deserts/>
        </div>
      </div>
    </>
  );
};
