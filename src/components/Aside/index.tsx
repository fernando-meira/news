import React from 'react';
import { FiSearch, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

import { colors } from '../../themes/styles';
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
        <a target="blank" href="https://www.facebook.com/lassofend/">
          <FiFacebook size={32} color={colors.fontColor} />
        </a>

        <a target="blank" href="https://www.instagram.com/lassofend/?hl=pt-br">
          <FiInstagram size={32} color={colors.fontColor} />
        </a>

        <a target="blank" href="https://www.linkedin.com/in/lassofend/">
          <FiLinkedin size={32} color={colors.fontColor} />
        </a>
      </footer>
    </Container>
  );
};

export default Aside;
