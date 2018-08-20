import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  padding: ${props => props.theme.gap.small};
  margin: ${props => props.theme.gap.small};
  border-left: 3px solid ${props => props.theme.primaryColor};
  transition: all .2s ease-out;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.gap.small};
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,.15);
    transform: translateY(-5px) scale(1.01);
  }
`;

export const SmallTitle = styled.h5`
  font-weight: 600;
`;