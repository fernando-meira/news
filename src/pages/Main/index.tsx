import React, { useState, useEffect } from 'react';
import { BiWorld } from 'react-icons/bi';
import { GiSportMedal } from 'react-icons/gi';
import { isMobile } from 'react-device-detect';
import { FaFlag, FaYoutube } from 'react-icons/fa';

import api from '../../services/api';

import { ListContainer } from '../../components';

import { Container, MenuBubble } from './styles';

const Main: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('top-headlines', {
          params: {
            apiKey: 'ffe1b6c6fc5c4ea7b644070943b91d6f',
            sources: 'google-news-br',
          },
        });

        if (data.status === 'ok') {
          setArticles(data.articles);
          setTotalItems(data.totalResults);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isMobile) {
    return (
      <Container>
        <MenuBubble width="100%">
          <a href="/brasil">
            <div>
              <FaFlag />
              <span>Brasil</span>
            </div>
          </a>

          <a href="/mundo">
            <div>
              <BiWorld />
              <span>Mundo</span>
            </div>
          </a>

          <a href="/esportes">
            <div>
              <GiSportMedal />
              <span>Esportes</span>
            </div>
          </a>

          <a href="/entretenimento">
            <div>
              <FaYoutube />
              <span>Entretenimento</span>
            </div>
          </a>
        </MenuBubble>

        <ListContainer articles={articles} />
      </Container>
    );
  }
  return (
    <Container>
      <MenuBubble />
    </Container>
  );
};

export default Main;
