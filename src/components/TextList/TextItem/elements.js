import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
  padding: ${props => props.theme.gap.small};
  position: relative;
`

export const Text = styled.h4`
  font-size: 16px;
  font-weight: 200;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

export const TextHeaders = styled.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: transform .2s ease-out;

  &:focus, &:hover {
    outline: 0;
    color: ${props => props.theme.primaryColor};
    transform: scale(1.1);
  }
`;