function FilmeItem({ filme, onEdit, onDelete }) {
  return (
    <tr>
      <td>{filme.titulo}</td>
      <td>{filme.genero}</td>
      <td>
        <button onClick={() => onEdit(filme)}>✏️ Editar</button>
        <button onClick={() => onDelete(filme.id)}>🗑️ Deletar</button>
      </td>
    </tr>
  );
}

export default FilmeItem;