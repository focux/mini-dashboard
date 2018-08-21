import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const activeClassName = 'selected-menu';

export const CustomNavLink = styled(NavLink).attrs({
  activeClassName
})`
  color: ${props => props.theme.white};
  display: block;
  padding: ${props => props.theme.gap.small};
  background: linear-gradient(60deg, ${props => props.theme.primaryColor} 50%, transparent 50%);
  background-position-x: 100%;
  background-size: 240%;
  transition: all .3s ease-out;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-position-x: 0;
  }

  &:hover svg {
    color: white;
  }

  & svg {
    color: ${props => props.theme.primaryColor};
  }

  &.${activeClassName} {
    background-position-x: 0;

    svg {
      color: white;
    }
  }
`;

export const ListItem = styled.li`

`;