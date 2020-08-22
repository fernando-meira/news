import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';

import { isMobile as verifyIsMobile } from '../../utils';

import { Container, ContainerList } from './styles';

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(verifyIsMobile);
  }, []);

  if (isMobile) {
    return (
      <Container>
        <Menu width="100%" />
      </Container>
    );
  }
  return (
    <Container>
      <Menu />

      <div>
        <h1>Find the latest News</h1>
        <ContainerList>
          <ul>
            <li>
              <img
                src="https://conteudo.imguol.com.br/c/esporte/ad/2019/08/31/reacao-de-edenilson-durante-partida-entre-internacional-e-botafogo-1567300791255_v2_615x300.jpg"
                alt="itemImg"
              />

              <h2>
                Boletim do Inter: Edenilson está pendurado e Guerrero desfalca o
                ataque - UOL Esporte
              </h2>

              <p>
                O Internacional tem um titular importante pendurado para o jogo
                contra o Atlético-GO, quarta-feira, pela quarta rodada do
                Brasileiro, no Beira-Rio. Edenilson, se receber amarelo, fica
                fora do jogo seguinte. No DM, Paolo Guerrero é a principal
                baixa.Pendur
              </p>

              <div>
                <p>ibge</p>
                <span>14/08/2020</span>
              </div>
            </li>
          </ul>
        </ContainerList>
      </div>
    </Container>
  );
};

export default Main;
