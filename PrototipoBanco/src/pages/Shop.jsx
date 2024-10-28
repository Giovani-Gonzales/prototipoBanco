import React, { useEffect, useState } from 'react';
import './Shop.css';
import Navbar from '../components/Navbar';
import { FaShoppingCart } from 'react-icons/fa';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [erro, setErro] = useState('');
  const [QtdCarrinho, setQtdCarrinho] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        if (!response.ok) {
          throw new Error('Falha ao buscar os itens');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
        setErro('Não foi possível carregar os itens.');
      }
    };

    fetchItems();
  }, []);

  const adicionarCarrinho = () => {
    setQtdCarrinho(QtdCarrinho + 1);
  };

  return (
    <div className='bodyShop'>
      <Navbar />

      <h1 className='container'>ViteShop</h1>
      <div className='container cardItemGroup'>
        {erro ? (
          <p className='erro-mensagem'>{erro}</p>
        ) : items.length > 0 ? (
          items.map(item => (
            <div className='itemCard' key={item.id}>
              <div className='itemCardHeader'>
                <img className='ImgItem' src={item.imagem} alt={item.nome} />
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

        <div className='floatingCart'>
          <FaShoppingCart size={24} color="white" />
          {QtdCarrinho > 0 && (
            <div className='contadorCarrinho'>
              {QtdCarrinho}
            </div>
          )}
        </div>
      </div>

      <div className='footer'></div>
    </div>
  );
};

export default Shop;
