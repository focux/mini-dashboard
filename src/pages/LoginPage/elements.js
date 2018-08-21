import styled from 'styled-components';
import { Grid, LinearProgress } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #5f27cd;
`;

export const RightSide = styled.div`
  background-color: ${props => props.theme.white};
  padding: ${props => props.theme.gap.medium};
  height: 100%;
  position: relative;
`;

export const LeftSide = styled.div`
  background-image: linear-gradient(to bottom, rgba(233, 30, 99, .6), rgba(52, 31, 151, .4)), url(https://firebasestorage.googleapis.com/v0/b/applebees-5f865.appspot.com/o/images%2Fslider-2?alt=media&token=fe92f295-3930-4d02-9b65-57016d677fd1);
  padding: ${props => props.theme.gap.medium};
  background-position: center;
  background-size: cover;
  height: 100%
`;

export const BoxContainer = styled(Grid)`
  box-shadow: 0 4px 15px rgba(0,0,0,.2);
  min-height: 60%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const StyledProgressBar = styled(LinearProgress)`

&&&& {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
`;

export const ErrorMessage = styled.h6`
  font-size: 10px;
  font-weight: 200;
  text-align: center;
`;