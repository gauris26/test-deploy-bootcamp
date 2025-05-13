import React, { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  }

  return (
    <div className="App">
        <h1>Bienvenido a mi Aplicacion React con Typescript</h1>
        <h2>Powered by Talendig SLR</h2>
        <p>Esta es una pagina para ilustrar el despliegue en Github Pages usando Github Actions</p>
        
        <button onClick={toggleMessage}>
          {showMessage ? "Ocultar Mensaje" : "Mostrar Mensaje"}
        </button>
        {
          showMessage && (
            <p>
              Felicidades! Tu aplicacion se encuentra desplegada y corriendo
            </p>
          )
        }
    </div>
  );
}

export default App;