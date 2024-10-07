import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import './LoginPage.css';
import Logo from '../assets/TransparenteRosa.png';

const LoginPage = () => {
  const [verSenha, setVerSenha] = useState(false);
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Função para gerar número aleatório dentro de um intervalo
  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Geração de agência, número da conta e saldo inicial
  const agencia = gerarNumeroAleatorio(1000, 9999);  
  const numeroConta = gerarNumeroAleatorio(10000000, 99999999); 
  const saldoInicial = gerarNumeroAleatorio(100, 10000); // Gera saldo entre R$100 e R$10.000

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Novo usuário com saldo inicial
    const novoUsuario = { cpf, senha, agencia, numeroConta, saldo: saldoInicial };

    try {
      const response = await fetch("http://localhost:5000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
      });

      if (response.ok) {
        alert("Conta criada com sucesso!");
        setCpf("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        alert("Erro ao criar a conta!");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  function MostrarSenha() {
    setVerSenha(!verSenha);
  }

  return (
    <div className="page-container">
      <div className='Background'></div>

      <div className='card'>
        <img className='logo' src={Logo} alt="Logo" />

        <form onSubmit={handleSubmit}>
          <label>CPF</label>
          <input 
            type="text" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF" 
            required
          />
          
          <label>Senha</label>
          <div className='input-container'>
            <input 
              type={verSenha ? "text" : "password"} 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha" 
              required
            />
            <span className='icon' onClick={MostrarSenha}>
              {verSenha ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
          
          <label>Confirmar Senha</label>
          <div className='input-container'>
            <input 
              type={verSenha ? "text" : "password"} 
              value={confirmarSenha} 
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirme sua senha" 
              required
            />
            <span className='icon' onClick={MostrarSenha}>
              {verSenha ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <button type="submit" >Criar conta</button>
        </form>

        <a href='#' className="login-link">Entrar na minha conta</a>
      </div>
    </div>
  );
};

export default LoginPage;
