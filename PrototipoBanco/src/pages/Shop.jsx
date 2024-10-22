import React, { useEffect, useState } from 'react';

import './Shop.css'

import Navbar from '../components/Navbar';

import { FaShoppingCart } from 'react-icons/fa';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [QtdCarrinho, setQtdCarrinho] = useState(0)

  useEffect(() => {
    fetch('http://localhost:5100/items')
      .then(response => response.json())
      .then(data => setItems(data)) 
      .catch(error => console.error('Erro ao buscar os itens:', error));
  }, []);

  const adicionarCarrinho = () => {
    setQtdCarrinho(QtdCarrinho + 1); 
  };

  return (
    <div className='bodyShop'>
      <Navbar />

      <h1 className='container'>ViteShop</h1>
      <div className='container cardItemGroup'>
        {items.length > 0 ? (
          items.map(item => (
            <div className='itemCard' key={item.id} >
              <div className='itemCardHeader'>
                <img className='ImgItem' src={item.imagem} alt={item.nome}/>
              </div>
              <div className='itemCardBody'>
                <h2 className='ItemName'>{item.nome}</h2>
                <p className='ItemQtd'>Quantidade: {item.quantidade}</p>
                <p className='ItemPrice'>Preço: R$ {item.preco}</p>
              </div>
              <div className='itemCardFooter'>
                <button onClick={adicionarCarrinho} className='itemButton'>Comprar Agora!</button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto disponível.</p>
        )}
      </div>

      <div className='floatingCart'>
        <FaShoppingCart size={24} color="white" />
        {QtdCarrinho > 0 && (
          <div className='contadorCarrinho'>
            {QtdCarrinho}
          </div>
        )}
      </div>

      <div className='footer'></div>

    </div>
  );
}

export default Shop;
