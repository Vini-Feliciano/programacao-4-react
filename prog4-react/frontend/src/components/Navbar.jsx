import './Navbar.css';

function Navbar({ paginaAtual, onNavegar }) {
  return (
    <nav className="navbar">
      <span className="brand">🎬 CINEMA</span>
      <div className="nav-links">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavegar('home');
          }}
          className={paginaAtual === 'home' ? 'ativo' : ''}
        >
          🏠 Início
        </a>
        <a
          href="/lista"
          onClick={(e) => {
            e.preventDefault();
            onNavegar('lista');
          }}
          className={paginaAtual === 'lista' ? 'ativo' : ''}
        >
          🎬 Filmes
        </a>
      </div>
    </nav>
  );
}

export default Navbar;