import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.dark,
    fontSize: '14px',
    padding: '25px 0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '75%',
    minHeight: '250px',
  },
  footerContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '2',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',

    '& section': {
      width: '100%',
      maxWidth: '50%',
      paddingTop: '34px',

      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },

      '& > a': {
        display: 'block',
        paddingLeft: '15%',
        fontWeight: '300',
        lineHeight: '2',
        letterSpacing: '0.4px',
        fontSize: '14px',
        color: theme.palette.grey.light,
        textDecoration: 'none',

        [theme.breakpoints.down('xs')]: {
          paddingLeft: '0',
        },
      },
      '& a:hover': {
        textDecoration: 'underline',
      },
    },
  },

  socialContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '80px',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '110px',
    height: '24px',
    marginRight: '20px',
    flexShrink: '0',

    '& a': {
      color: theme.palette.magenta,
    },
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    color: theme.palette.grey.main,

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingTop: '25px',
    },
  },
  button: {
    borderRadius: '5px',
    fontSize: '14px',
    maxHeight: '46px',
    maxWidth: '253px',
    width: '100%',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: '10px 50px',
      marginLeft: '0',
    },
  },
}));
