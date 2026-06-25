const API_URL = 'http://localhost:3000/api/filmes';

export const api = {
  // Listar todos os filmes
  async listar() {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error('Erro ao buscar filmes');
    return resposta.json();
  },

  // Buscar um filme por ID
  async buscar(id) {
    const resposta = await fetch(`${API_URL}/${id}`);
    if (!resposta.ok) throw new Error('Filme não encontrado');
    return resposta.json();
  },

  // Adicionar um filme
  async adicionar(titulo, genero) {
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, genero })
    });
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.erro || 'Erro ao adicionar filme');
    }
    return resposta.json();
  },

  // Atualizar um filme
  async atualizar(id, titulo, genero) {
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, genero })
    });
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.erro || 'Erro ao atualizar filme');
    }
    return resposta.json();
  },

  // Deletar um filme
  async deletar(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.erro || 'Erro ao deletar filme');
    }
    return resposta.json();
  }
};