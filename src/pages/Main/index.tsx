import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Aside } from '../../components';
import { Container, ContainerList } from './styles';

interface News {
  id: number;
  tipo: string;
  titulo: string;
  imagens: string;
  editorias: string;
  introducao: string;
  data_publicacao: string;
}

const Main = () => {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await api.get('/', {
          params: {
            qtd: 12,
            page: 1,
          },
        });

        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <Aside />

      <div>
        <h1>Find the latest News</h1>
        <ContainerList>
          <ul>
            <li key="{item.id}">
              <img src="{item.imagens}" alt="{item.tipo}" />

              <h2>"{item.titulo}"</h2>

              <p>"{item.introducao}"</p>

              <div>
                <p>"{item.editorias}"</p>
                <span>"{item.data_publicacao}"</span>
              </div>
            </li>
          </ul>
        </ContainerList>
      </div>
    </Container>
  );
};

export default Main;
