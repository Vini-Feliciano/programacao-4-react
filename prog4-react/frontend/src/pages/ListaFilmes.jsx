// frontend/src/pages/ListaFilmes.jsx
import { useState, useEffect } from 'react';
import { api } from '../services/api';
import Navbar from '../components/Navbar';
import FilmeForm from '../components/FilmeForm';
import FilmeList from '../components/FilmeList';
import './ListaFilmes.css';

function ListaFilmes({ onNavegar }) {
  const [filmes, setFilmes] = useState([]);
  const [filmeEditando, setFilmeEditando] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  // Carregar filmes do back-end
  useEffect(() => {
    carregarFilmes();
  }, []);

  const carregarFilmes = async () => {
    setLoading(true);
    setErro('');
    try {
      const dados = await api.listar();
      setFilmes(dados);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
      setErro('Erro ao carregar filmes. Verifique se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const handleSalvar = async (dados) => {
    try {
      if (filmeEditando) {
        // Atualizar filme
        const atualizado = await api.atualizar(
          filmeEditando.id,
          dados.titulo,
          dados.genero
        );
        setFilmes(filmes.map(f => f.id === filmeEditando.id ? atualizado : f));
        setFilmeEditando(null);
      } else {
        // Adicionar filme
        const novo = await api.adicionar(dados.titulo, dados.genero);
        setFilmes([...filmes, novo]);
      }
    } catch (error) {
      console.error('Erro ao salvar filme:', error);
      alert(error.message);
    }
  };

  const handleDeletar = async (id) => {
    if (!confirm('Tem certeza que deseja deletar este filme?')) return;

    try {
      await api.deletar(id);
      setFilmes(filmes.filter(f => f.id !== id));
      if (filmeEditando && filmeEditando.id === id) {
        setFilmeEditando(null);
      }
    } catch (error) {
      console.error('Erro ao deletar filme:', error);
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar paginaAtual="lista" onNavegar={onNavegar} />
      <div className="lista-container">
        <h1>Lista de Filmes</h1>
        <FilmeForm
          onSave={handleSalvar}
          filmeEditando={filmeEditando}
          onCancel={() => setFilmeEditando(null)}
        />
        {loading ? (
          <p>Carregando filmes...</p>
        ) : erro ? (
          <p className="erro">{erro}</p>
        ) : (
          <FilmeList
            filmes={filmes}
            onEdit={setFilmeEditando}
            onDelete={handleDeletar}
          />
        )}
      </div>
    </>
  );
}

export default ListaFilmes;