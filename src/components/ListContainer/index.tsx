import React from 'react';

import { Container, ItemList } from './styles';

interface ListContainerProps {
  articles: {
    title: string;
    urlToImage: string;
  }[];
}

const ListContainer: React.FC<ListContainerProps> = ({ articles }) => {
  console.log(articles);

  return (
    <Container>
      {articles.map((article, index) => (
        <ItemList key={index}>
          <img src={article.urlToImage} alt={article.title} />

          <h1>{article.title}</h1>

          <div>
            <span>author</span>

            <p>data</p>
          </div>
        </ItemList>
      ))}
    </Container>
  );
};

export default ListContainer;
