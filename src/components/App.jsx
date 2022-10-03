
import { Menu } from './comp';
import { ModalProvider } from './context';
import '../style.css'

export const App = () => {
  return (
 
    <>
      <ModalProvider>
        <div className='main'>
          <Menu />
        </div>
        
      </ModalProvider>
    </>
  );
};
