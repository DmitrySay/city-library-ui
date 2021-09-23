import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: ({ white }) => ({
    padding: '30px 65px',
    maxWidth: 'initial',
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.25)',
    border: 'solid 2px #ffffff',
    borderRadius: 0,
    background: white
      ? '#FFFFFF'
      : `linear-gradient(202deg,
      ${theme.palette.grey[300]} 0%,
      ${theme.palette.grey[300]} 68%,
      ${theme.palette.primary.light} 100%)`,
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: ({ white }) => ({
    marginBottom: 10,
    marginLeft: white ? 0 : 55,
    fontSize: 36,
    letterSpacing: -1.08,
    fontWeight: 300,
    color: white ? theme.palette.primary.light : theme.palette.text.secondary,
    textTransform: 'capitalize',
  }),
  closeButton: {
    marginLeft: 20,
    padding: 10,
    fontWeight: 600,
    fontSize: 11,
    color: theme.palette.primary.main,
  },
}));
