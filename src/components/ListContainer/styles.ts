import styled from 'styled-components';

import { colors } from '../../themes/styles';

export const Container = styled.ul`
  width: 90%;
  margin: 32px auto 0;
`;
export const ItemList = styled.li`
  width: 100%;
  padding: 10px;
  border-radius: 16px;

  list-style: none;
  background: ${colors.white};

  img {
    width: 100%;
    height: 50%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  h1 {
    font-size: 16px;
    color: ${colors.darkGray};
  }

  > div {
    width: 100%;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${colors.darkGray};

    > span {
      font-size: 10px;
      text-transform: uppercase;
    }

    > p {
      font-size: 10px;
      text-transform: uppercase;
    }
  }
`;
