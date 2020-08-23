import styled from 'styled-components';
import { bubble as Menu } from 'react-burger-menu';

import { colors } from '../../themes/styles';

export const Container = styled.main`
  height: 100vh;
  position: relative;

  display: flex;
  /* Position and sizing of burger button */
  .bm-burger-button {
    top: 12px;
    left: 12px;
    position: absolute;

    width: 36px;
    height: 30px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colors.baseColor};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${colors.baseColor};
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
    top: 0%;
    left: 0%;
    position: fixed;

    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    width: 100%;
    padding: 2.5em 1.5em 0;

    font-size: 1.15em;
    background: ${colors.baseColor};
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${colors.baseColor};
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

export const MenuBubble = styled(Menu)`
  a {
    width: 100%;
    border-radius: 10px;

    text-decoration: none;
    color: ${colors.baseColor};
    background: ${colors.white};
    > div {
      width: 100%;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        margin-right: 16px;
      }
    }

    & + a {
      margin-top: 10px;
    }
  }
`;
