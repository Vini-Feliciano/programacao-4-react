import { useState } from 'react';
import Home from './pages/Home';
import ListaFilmes from './pages/ListaFilmes';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('home');

  const irPara = (pagina) => {
    setPagina(pagina);
  };

  return (
    <div className="app">
      {pagina === 'home' ? (
        <Home onNavegar={irPara} />
      ) : (
        <ListaFilmes onNavegar={irPara} />
      )}
    </div>
  );
}

export default App;