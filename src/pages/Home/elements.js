import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: ${props => props.theme.gap.small};
`;

export const Logo = styled.img`
  height: 100px;
`;