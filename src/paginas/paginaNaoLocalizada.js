import React from 'react';


const estilo = {
  pagNaoEncontrada: {
    color: '#fff',
    fontWeight: 'bold',
  },
}

const PaginaNaoLocalizada = () => (
  <h2 style={estilo.pagNaoEncontrada}>Página não encontrada.</h2>
);

export default PaginaNaoLocalizada;