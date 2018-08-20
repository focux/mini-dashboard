import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #5f27cd;
`;

export const Main = styled.main`
  background-color: ${props => props.theme.white};
  height: 100%;
`;

export const BoxContainer = styled.div`
  box-shadow: 0 5px 18px rgba(0,0,0,.3);
  border-radius: 3px;
  overflow: hidden;
`;