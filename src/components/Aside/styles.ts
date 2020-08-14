import styled from 'styled-components';

import { colors } from '../../themes/styles';

export const Container = styled.aside`
  position: relative;

  width: 20%;
  height: 100vh;
  border-right: 1px solid ${colors.gray};

  background: ${colors.aside};

  h1 {
    padding: 1rem;
  }

  > div {
    width: 100%;
    height: 50px;
    padding: 1rem;
    border-top: 1px solid ${colors.gray};
    border-bottom: 1px solid ${colors.gray};

    display: flex;
    align-items: center;
    justify-content: flex-start;

    > input {
      border: none;

      flex: 1;

      background: ${colors.transparent};
    }

    > svg {
      margin-right: 8px;
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > svg {
      background: ${colors.fontColor};
    }
  }
`;
