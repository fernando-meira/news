import styled from 'styled-components';

import { colors } from '../../themes/styles';

export const Container = styled.main`
  height: 100vh;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 4fr;

  > div {
    width: 100%;
    padding: 3rem 2rem;

    h1 {
      font-size: 3rem;
    }
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 12px;
    top: 12px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colors.white};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${colors.gray};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${colors.white};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    top: 0%;
    left: 0%;

    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    padding: 2.5em 1.5em 0;

    font-size: 1.15em;
    background: ${colors.green};
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${colors.green};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
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

      background: ${colors.green};
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
