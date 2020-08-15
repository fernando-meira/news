import styled from 'styled-components';

import { colors } from '../../themes/styles';
import backgroundMain from '../../themes/assets/images/backgroundMain.jpg';

export const Container = styled.main`
  height: 100vh;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 4fr;

  /* overflow: hidden;
  background: url(${backgroundMain}) no-repeat fixed center;
  background-size: 100%;
  background-clip: border-box; */

  > div {
    width: 100%;
    padding: 3rem 2rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const ContainerList = styled.div`
  > ul {
    width: 100%;

    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);

    overflow: hidden;

    li {
      border-radius: 8px;
      height: 150px;

      display: flex;
      align-items: center;
      flex-direction: column;

      background: ${colors.aside};
      transition: 0.4s;

      :hover {
        transform: translateX(4px);
      }

      img {
        width: 100%;
        max-height: 80px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        object-fit: cover;
      }

      > p {
        margin-top: 10px;

        font-size: 16px;
        font-weight: bold;
        color: ${colors.fontColor};
      }

      > div {
        width: 100%;
        padding: 10px;

        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        > p {
          font-size: 12px;
          color: ${colors.fontColor};
        }

        > span {
          font-size: 12px;
          margin-left: 8px;
        }
      }
    }
  }
`;
