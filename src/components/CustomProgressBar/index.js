import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';

const CustomProgressBar = styled(LinearProgress).attrs({
  color: 'secondary'
})`
&&&& {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

}
`;

export default CustomProgressBar;