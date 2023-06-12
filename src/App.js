import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import React, { useState } from 'react';
// import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  };

  manejarClick(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks+1 }));
  };

  reiniciarContador(){
    this.setState({ numClicks: 0 });
  };

  render(){
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
            numClicks={this.state.numClicks}
          />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

// function App() {
//   let [numClick, setNumClick] = useState(0);

//   const manejarClick = () => {
//     setNumClick(numClick+1);
//     console.log('click');
//   };

//   const reiniciarContador = () => {
//     setNumClick(0);
//     console.log('reiniciar');
//   };
  
//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//         <img
//           className='freecodecamp-logo'
//           src={freeCodeCampLogo}
//           alt='logo de freecodecamp'
//         />
//       </div>
//       <div className='contador-principal'>
//         <Contador
//           numClicks={numClick}
//         />
//         <Boton 
//           texto='Click'
//           esBotonDeClick={true}
//           manejarClick={manejarClick}
//         />
//         <Boton 
//           texto='Reiniciar'
//           esBotonDeClick={false}
//           manejarClick={reiniciarContador}
//         />
//       </div>
//     </div>
//   );
// }

export default App;
