import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  let [numClick, setNumClick] = useState(0);

  const manejarClick = () => {
    setNumClick(numClick+1);
    console.log('click');
  };

  const reiniciarContador = () => {
    setNumClick(0);
    console.log('reiniciar');
  };
  
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'
        />
      </div>
      <div className='contador-principal'>
        <Contador
          numClicks={numClick}
        />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
