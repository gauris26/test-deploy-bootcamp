import React, { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!setShowMessage);
  }
  return (
    <div className="App">
        <h1>Bienivo a mi Ap-licacion React- conh Typescript</h1>
        <p>Esta es una pagina para iluestrar el despliegue en Github Pages usando Github Actions</p>
        
        <button onClick={toggleMessage}>
          {showMessage ? "Ocultar Mensaje" : "Mostrar Masaje"}
        </button>
        {
          showMessage  && (
            <p>
              Felicidades! Tu aplicacion se encuentra desplegada y corriendo
            </p>
          )
        }
    </div>
  );
}

export default App;