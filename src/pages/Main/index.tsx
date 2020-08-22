import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';

import { isMobile as verifyIsMobile } from '../../utils';

import { ListContainer } from '../../components';

import { Container } from './styles';

const Main: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(verifyIsMobile);
  }, []);

  if (isMobile) {
    return (
      <Container>
        {/* <Menu width="100%" /> */}

        <ListContainer />
      </Container>
    );
  }
  return (
    <Container>
      <Menu />
    </Container>
  );
};

export default Main;
