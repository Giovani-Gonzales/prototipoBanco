import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Faz a requisição para a API local
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setItems(data.items))
      .catch(error => console.error('Erro ao buscar os itens:', error));
  }, []);

  return (
    <div>
      <h1>Produtos Disponíveis</h1>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.imagem} alt={item.nome} />
          <h2>{item.nome}</h2>
          <p>Quantidade: {item.quantidade}</p>
          <p>Preço: R$ {item.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
