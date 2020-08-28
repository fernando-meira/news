import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';
import { GiSportMedal } from 'react-icons/gi';
import { isMobile } from 'react-device-detect';
import { FaFlag, FaYoutube } from 'react-icons/fa';

import api from '../../services/api';

import { ListContainer } from '../../components';

import { Container, MenuBubble } from './styles';

const Main: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const key = 'ffe1b6c6fc5c4ea7b644070943b91d6f';
  const [totalItems, setTotalItems] = useState<number>(0);
  const [bubbleIsOpen, setBubbleIsOpen] = useState(false);
  console.log(bubbleIsOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('top-headlines', {
          params: {
            apiKey: key,
            sources: 'google-news-br',
          },
        });

        if (data.status === 'ok') {
          setArticles(data.articles);
          setTotalItems(data.totalResults);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchNews = async (q: string) => {
    setBubbleIsOpen(!bubbleIsOpen);
    try {
      const { data } = await api.get('everything', {
        params: { apiKey: key, q },
      });

      if (data.status === 'ok') {
        setArticles(data.articles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isMobile) {
    return (
      <Container>
        <MenuBubble width="100%" isOpen={bubbleIsOpen}>
          <Link to="/brasil">
            <div>
              <FaFlag />
              <span>Brasil</span>
            </div>
          </Link>

          <Link to="/" onClick={() => fetchNews('brasil')}>
            <div>
              <BiWorld />
              <span>Mundo</span>
            </div>
          </Link>

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
