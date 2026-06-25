import Navbar from '../components/Navbar';
import './Home.css';

function Home({ onNavegar }) {
  return (
    <>
      <Navbar paginaAtual="home" onNavegar={onNavegar} />
      <div className="home-container">
        <h1>🎬 Meu Catálogo de Filmes</h1>
        <p>Organize e gerencie seus filmes favoritos</p>
        <button onClick={() => onNavegar('lista')} className="btn-link">
          📋 Ver Lista de Filmes
        </button>
      </div>
    </>
  );
}

export default Home;