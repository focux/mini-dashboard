import styled from 'styled-components';

export const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.7);
  z-index: 99;
  opacity: ${props => props.isUploading ? 1 : 0};
  transition: opacity .3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    opacity: 1;
  }

  svg {
    color: ${props => props.theme.white};
    width: 30px;
    height: 30px
  }
`;

export const Card = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  max-height: 155px;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const CardOverlayText = styled.div`
  color: ${props => props.theme.white};
  font-size: 13px;
`