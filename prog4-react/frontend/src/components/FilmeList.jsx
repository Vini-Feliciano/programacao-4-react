import FilmeItem from './FilmeItem';
import './FilmeList.css';

function FilmeList({ filmes, onEdit, onDelete }) {
  if (filmes.length === 0) {
    return <p className="no-filmes">Nenhum filme cadastrado ainda.</p>;
  }

  return (
    <table className="filme-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Gênero</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {filmes.map((filme) => (
          <FilmeItem
            key={filme.id}
            filme={filme}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default FilmeList;