import { DefaultTheme } from 'styled-components';

const colors = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  blue: {
    100: 'rgba(54, 46, 255,1)',
  },
  zinc: {
    100: 'rgba(197, 197, 197, 1)',
  },
};

const fontSize = {
  md: '18px',
};

const border = {
  radius: {
    sm: '6px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSize: typeof fontSize;
    border: typeof border;
  }
}

export const theme: DefaultTheme = {
  colors,
  fontSize,
  border,
};
