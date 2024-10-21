import React from 'react';

import { Link} from 'react-router-dom'

import './Overview.css'; 

import Navbar from '../components/Navbar';

import { FaPix } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Overview = () => {
  const userAccount = {
    saldo: 4763, 
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="welcome">
          <div className="text-content">
            <h1>Bem vindo (a)</h1>
            <a>O que deseja fazer hoje?</a>
          </div>
        </div>

        <div className="quickMenu">
          <div className="miniMenu">
            <FaPix className="pixLogo" />
            <label>Área Pix</label>
          </div>
          <div className="miniMenu">
            <BsGraphUp className="pixLogo" />
            <label>Investimentos</label>
          </div>
          <div className="miniMenu">
            <FaMoneyCheck className="pixLogo" />
            <label>Cartões</label>
          </div>
          <div className="miniMenu">
            <FaUserCircle className="pixLogo" />
            <label>Configurar Perfil</label>
          </div>
        </div>

        <div className="overview">
          <div className="title">
            <h1>Overview da conta</h1>
          </div>

          <div className="cardGroup">
            <div className="cardInfo">
              <div className="balance">
                <h1>R${userAccount.saldo?.toFixed(2) || "0,00"}</h1>
                <GrMoney className="IconCard" />
              </div>
              <label>Seu saldo</label>
              <div className="footerCard">
                <Link className='linkButton'>Ver Extrato</Link>
              </div>
            </div>

            <div className="cardInfo">
              <div className="balance">
                <h1>Investimentos</h1>
                <BsGraphUp className="IconCard" />
              </div>
              <label>Invista seu dinheiro e faça render já!</label>
              <div className="footerCard">
                <Link className='linkButton'>Ver Extrato</Link>
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
                <Link className='linkButton' to="/viteshop">Visitar Agora!</Link>
              </div>
            </div>

            <div className="cardInfo">
              <div className="balance">
                <h1>Empréstimo</h1>
                <FaHandsHelping className="IconCard" />
              </div>
              <label>Faça seu empréstimo agora!</label>
              <div className="footerCard">
                <Link className='linkButton'>Ver Extrato</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'></div>
    </div>
  );
};

export default Overview;
