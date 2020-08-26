import styled from 'styled-components';

import { colors } from '../../themes/styles';

export const Container = styled.ul`
  width: 90%;
  margin: 64px auto 0;
`;
export const ItemList = styled.li`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid ${colors.lightGray};

  transition: 0.4s;
  list-style: none;

  :hover {
    transform: translateX(10px);
  }

  & + li {
    margin-top: 16px;
  }
  a {
    text-decoration: none;

    > img {
      width: 100%;
      height: 60%;
      max-height: 60%;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;

      object-fit: cover;
    }

    > h1 {
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
  }
`;
