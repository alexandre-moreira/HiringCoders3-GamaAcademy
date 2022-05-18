import React, {useState} from 'react';
import axios from 'axios';

function Home() {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
          const repositories = response.data;
          const repositoriesName = [];
          repositories.map((repository) => {
              repositoriesName.push(repository.name);
          });
         localStorage.setItem('repositoriesName',  JSON.stringify(repositoriesName));
      });
  }
  return (
    
    <>
      <p>{usuario}</p>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default Home;
