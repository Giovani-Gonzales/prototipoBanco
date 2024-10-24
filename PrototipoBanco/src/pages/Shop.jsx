import React, { useEffect, useState } from 'react';

import './Shop.css'

import Navbar from '../components/Navbar';

import { FaShoppingCart } from 'react-icons/fa';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [QtdCarrinho, setQtdCarrinho] = useState(0)

  const itensMock = [
    {
      "id": "001a",
      "nome": "Apple iPhone 14",
      "quantidade": 8,
      "preco": 5000,
      "imagem": "https://a-static.mlcdn.com.br/1500x1500/apple-iphone-14-128gb-azul-61-12mp-ios-5g/magazineluiza/237184400/791bd420fb03ad4a40f58a45634ce39d.jpg"
    },
    {
      "id": "002b",
      "nome": "Samsung Galaxy S23",
      "quantidade": 12,
      "preco": 4500,
      "imagem": "https://imgs.ponto.com.br/55065147/1g.jpg"
    },
    {
      "id": "003c",
      "nome": "Dell XPS 13",
      "quantidade": 5,
      "preco": 7000,
      "imagem": "https://m.media-amazon.com/images/I/91MXLpouhoL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "id": "004d",
      "nome": "Sony WH-1000XM5",
      "quantidade": 20,
      "preco": 1500,
      "imagem": "https://t.ctcdn.com.br/hmUYy2chErr4MTUiniqN5Psp1ho=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i619170.png"
    },
    {
      "id": "005e",
      "nome": "GoPro HERO 11",
      "quantidade": 10,
      "preco": 2500,
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1zgwTEze2TAgqZUnDcqLZF9n0snE9xvyTQ&s"
    },
    {
      "id": "006f",
      "nome": "Apple MacBook Air M2",
      "quantidade": 4,
      "preco": 8000,
      "imagem": "https://fastshopbr.vtexassets.com/arquivos/ids/494314/0_AEMLY33BZAPTO_PRD_1500_1.jpg?v=638617839586930000"
    },
    {
      "id": "007g",
      "nome": "PlayStation 5",
      "quantidade": 6,
      "preco": 5500,
      "imagem": "https://m.media-amazon.com/images/I/51+qnZm7V7L.jpg"
    },
    {
      "id": "008h",
      "nome": "Xbox Series X",
      "quantidade": 7,
      "preco": 5000,
      "imagem": "https://m.media-amazon.com/images/I/61rApRFkOeL.jpg"
    },
    {
      "id": "009i",
      "nome": "Logitech MX Master 3",
      "quantidade": 15,
      "preco": 400,
      "imagem": "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/173601"
    }
  ];

  useEffect(() => {
    setItems(itensMock);
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
