import palette from './palette';

export default {
  useNextVariants: true,
  fontFamily: ['Montserrat', 'Montserrat-Light', 'Roboto', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontSize: '2.25rem',
    fontWeight: 300,
  },
  h2: {
    fontSize: '2rem',
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.625rem',
  },
  overline: {
    color: palette.primary.light,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
};
