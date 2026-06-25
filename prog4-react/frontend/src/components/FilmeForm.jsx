import { useState, useEffect } from 'react';
import './FilmeForm.css';

function FilmeForm({ onSave, filmeEditando, onCancel }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  useEffect(() => {
    if (filmeEditando) {
      setTitulo(filmeEditando.titulo);
      setGenero(filmeEditando.genero);
    }
  }, [filmeEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !genero) {
      alert('Preencha todos os campos!');
      return;
    }
    onSave({ titulo: titulo.trim(), genero });
    setTitulo('');
    setGenero('');
  };

  return (
    <form className="filme-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do filme"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
        <option value="" disabled>Selecione o Gênero</option>
        <option value="Ação">🔥 AÇÃO</option>
        <option value="Comédia">😂 COMÉDIA</option>
        <option value="Drama">🎭 DRAMA</option>
        <option value="Terror">👻 TERROR</option>
        <option value="Crime">🔪 CRIME</option>
        <option value="Ficção">🚀 FICÇÃO</option>
        <option value="Romance">💖 ROMANCE</option>
      </select>
      <button type="submit">{filmeEditando ? 'Atualizar' : 'Adicionar'}</button>
      {filmeEditando && (
        <button type="button" onClick={onCancel} className="btn-cancelar">
          Cancelar
        </button>
      )}
    </form>
  );
}

export default FilmeForm;