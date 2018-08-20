import { lighten } from 'polished';

export default {
  primaryColor: '',
  secondaryColor: '',
  tertiaryColor: '',
  white: '#f5f6fa',
  black: '#000000',
  get lightWhite() {
    return lighten(0.5, this.white);
  },
  get lightBlack() {
    return lighten(0.5, this.black);;
  },
  font: {
    size: {
      tiny: '.5px',
      small: '15px',
      medium: '25px',
      big: '4.5rem',
      huge: '6rem'
    },
    weight: {
      light: '100',
      regular: '300',
      bold: '500'
    }
  },
  gap: {
    referenceVal: 0.5,
    tiny: '0.5rem',
    small: '1.5rem',
    medium: '2rem',
    big: '3rem',
    huge: '5rem'
  }
};
