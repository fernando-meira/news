import styled from 'styled-components';

import { colors } from '../../themes/styles';

export const Container = styled.ul`
  width: 90%;
  margin: 64px auto 0;
`;
export const ItemList = styled.li`
  width: 100%;
  min-height: 200px;
  max-height: 320px;
  border-radius: 16px;
  border: 1px solid ${colors.lightGray};

  transition: 0.4s;
  list-style: none;

  :last-child {
    margin-bottom: 1rem;
  }

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
      margin: 0 8px;
      font-size: 16px;
      color: ${colors.darkGray};
    }

    > div {
      width: 100%;
      margin: 10px 8px;

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
