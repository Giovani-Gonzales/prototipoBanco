import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import './LoginPage.css';
import Logo from '../assets/TransparenteRosa.png';

const LoginPage = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [verSenha, setVerSenha] = useState(false);
  const [agencia, setAgencia] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [erro, setErro] = useState('');

  function MostrarSenha() {
    setVerSenha(!verSenha);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/accounts?cpf=${cpf}&senha=${senha}&agencia=${agencia}&numeroConta=${numeroConta}`);
      const data = await response.json();

      if (data.length > 0) {

        alert("Login bem-sucedido!");
      } else {

        setErro("Informações inválidas. Verifique seus dados.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErro("Erro no servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div>
      <div className='Background'></div>

      <div className='card'>
        <img className='logo' src={Logo} alt="Logo" />

        <form onSubmit={handleSubmit}>
          <label>CPF</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
          />
          
          <label>N° da conta</label>
          <input
            type="text"
            value={numeroConta}
            onChange={(e) => setNumeroConta(e.target.value)}
            placeholder="Digite o N° da conta"
          />
          
          <label>Agência</label>
          <input
            type="text"
            value={agencia}
            onChange={(e) => setAgencia(e.target.value)}
            placeholder="Digite o N° da agência"
          />

          <label>Senha</label>
          <div className='input-container'>
            <input
              type={verSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
            <span className='icon' onClick={MostrarSenha}>
              {verSenha ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          {erro && <p className='erro'>{erro}</p>}

          <button type="submit">Entrar</button>
        </form>

        <a href=''>Criar uma conta</a>
      </div>
    </div>
  );
};

export default LoginPage;