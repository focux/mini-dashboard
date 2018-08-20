import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const CustomNavLink = styled(NavLink)`
  color: ${props => props.theme.white};
`;

export const ListItem = styled.li`
  padding: ${props => props.theme.gap.small};
  background: linear-gradient(60deg, ${props => props.theme.primaryColor} 50%, transparent 50%);
  background-position-x: 100%;
  background-size: 240%;
  transition: all .3s ease-out;
  &:hover {
    background-position-x: 0;
  }

  &:hover svg {
    color: white;
  }

  &  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  & svg {
    color: ${props => props.theme.primaryColor};
  }
`;