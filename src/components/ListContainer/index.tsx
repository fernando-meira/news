import React from 'react';

import { Container, ItemList } from './styles';

const ListContainer = () => {
  return (
    <Container>
      <ItemList>
        <img
          src="https://s2.glbimg.com/j-j2BBC56JXZfjW-bPNNY1JNYq8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/e/Q/zYKyD6QzuuFiBCPmggiA/tempo.jpeg"
          alt="title"
        />

        <h1>
          PM encontra mais um corpo de sem-teto no Centro de SP após madrugada
          mais fria do ano
        </h1>

        <div>
          <span>author</span>

          <p>data</p>
        </div>
      </ItemList>
    </Container>
  );
};

export default ListContainer;
