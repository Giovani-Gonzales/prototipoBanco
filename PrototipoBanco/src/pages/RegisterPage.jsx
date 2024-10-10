import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import './LoginPage.css';
import Logo from '../assets/TransparenteRosa.png';
import { Link, useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const [verSenha, setVerSenha] = useState(false);
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const agencia = gerarNumeroAleatorio(1000, 9999);  
  const numeroConta = gerarNumeroAleatorio(10000000, 99999999); 
  const saldoInicial = gerarNumeroAleatorio(100, 10000); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

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
    <div className="Logincontainer">

      <div className='Logincard'>
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

          <button className='LoginButton' type="submit" >Criar conta</button>
        </form>

        <Link to="/login" className="login-link">Entrar na minha conta</Link>
      </div>
    </div>
  );
};

export default LoginPage;
