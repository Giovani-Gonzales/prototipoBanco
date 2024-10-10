import React from 'react';
import Logo from '../assets/TransparenteAzul.png';
import './NavbarStyle.css';
import { useState, useEffect } from 'react';

import { Link} from 'react-router-dom'

const Navbar = () => {

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
      <nav className="navbar">
        <div>
          <span><img src={Logo} alt="Logo"/></span>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <img src={Logo}/><h5>ViteBank®</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className='perfil'>
              <img id='UserIcon' src={user.picture.large}/>
              
              <div className='UserInfo'>
                <label>{user.name.first} {user.name.last}</label>
                <label>Conta Corrente</label>
                <label>Agencia 0456 </label>
              </div>

            </div>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="#">Suporte</a>
              </li>
              <li className="nav-item">
                <Link id='sair' to="/login">Sair</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
