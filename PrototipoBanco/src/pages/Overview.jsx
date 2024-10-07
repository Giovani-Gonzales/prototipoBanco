import React, { useEffect, useState } from 'react';
import './Overview.css'; 


import { FaPix } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const Overview = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div>

      <div className="container">
        <div className="welcome">
          <div className="text-content">
            <h1>Bem vindo, {user.name.first}!</h1>
            <a>O que deseja fazer hoje?</a>
          </div>
        </div>

        <div className="quickMenu">
          <div className="miniMenu">
            <FaPix className="pixLogo" />
            <label>Área Pix</label>
          </div>
          <div className="miniMenu">
            <FaPix className="pixLogo" />
            <label>Área Pix</label>
          </div>
          <div className="miniMenu">
            <FaMoneyCheck className="pixLogo" />
            <label>Cartões</label>
          </div>
          <div className="miniMenu">
            <FaPix className="pixLogo" />
            <label>Área Pix</label>
          </div>
        </div>

        <div className="overview">
          <div className="title">
            <h1>Overview da conta</h1>
          </div>

          <div className="cardGroup">
            <div className="cardInfo">
              <div className="balance">
                <h1>R$1000,00</h1>
                <GrMoney className="IconCard" />
              </div>
              <label>Seu saldo</label>
              <div className="footerCard">
                <button>Ver Extrato</button>
              </div>
            </div>

            <div className="cardInfo">
              <div className="balance">
                <h1>Investimentos</h1>
                <BsGraphUp className="IconCard" />
              </div>
              <label>Invista seu dinheiro e faça render já!</label>
              <div className="footerCard">
                <button>Ver Extrato</button>
              </div>
            </div>
          </div>

          <div className="cardGroup">
            <div className="cardInfo">
              <div className="balance">
                <h1>ViteShop</h1>
                <FaBagShopping className="IconCard" />
              </div>
              <label>Aproveite descontos exclusivos!</label>
              <div className="footerCard">
                <button>Ver Extrato</button>
              </div>
            </div>

            <div className="cardInfo">
              <div className="balance">
                <h1>Empréstimo</h1>
                <FaHandsHelping className="IconCard" />
              </div>
              <label>Faça seu empréstimo agora!</label>
              <div className="footerCard">
                <button>Ver Extrato</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>

      </div>
    </div>
  );
};

export default Overview;
