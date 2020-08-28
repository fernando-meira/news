import React from 'react';

import { Container, ItemList } from './styles';

interface ListContainerProps {
  articles: {
    url: string;
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
          article.urlToImage
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img src={article.urlToImage} alt={article.title} />

            <h1>{article.title}</h1>

            <div>{article.author && <span>{article.author}</span>}</div>
          </a>
        </ItemList>
      ))}
    </Container>
  );
};

export default ListContainer;
