import React from 'react';
import { format } from 'date-fns';

import { Container, ItemList } from './styles';

interface ListContainerProps {
  articles: {
    title: string;
    author?: string;
    urlToImage: string;
  }[];
}

const ListContainer: React.FC<ListContainerProps> = ({ articles }) => {
  return (
    <Container>
      {articles.map((article, index) => (
        <ItemList key={index}>
          <img src={article.urlToImage} alt={article.title} />

          <h1>{article.title}</h1>

          <div>{article.author && <span>{article.author}</span>}</div>
        </ItemList>
      ))}
    </Container>
  );
};

export default ListContainer;
