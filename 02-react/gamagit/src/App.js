import React, {useState} from 'react';

function App() {
  const [usuario, setUsuario] = useState('Alexandre Moreira');
  return (
    <>
      <p>{usuario}</p>
      <input name="usuario" id="usuario" className="usuarioInput"placeholder="Usuário"/>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
