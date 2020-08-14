import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

import { Container } from './styles';

const Aside = () => {
  return (
    <Container>
      <h1>NewsIBGE</h1>

      <div>
        <FiSearch size={20} />
        <input placeholder="Search" />
      </div>

      <footer>
        <Link to="https://www.facebook.com/lassofend/">
          <FiFacebook />
        </Link>

        <Link to="https://www.instagram.com/lassofend/?hl=pt-br">
          <FiInstagram />
        </Link>

        <Link to="https://www.linkedin.com/in/lassofend/">
          <FiLinkedin />
        </Link>
      </footer>
    </Container>
  );
};

export default Aside;
