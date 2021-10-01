import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 210;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '88px',
    background: theme.palette.background.default,
    width: '75%',
    fontSize: '14px',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  menuItem: { color: theme.palette.primary.main },
  loginButton: {
    marginLeft: '44px',
    color: theme.palette.primary.main,
    textTransform: 'none',
    textDecoration: 'underline',
    fontSize: '14px',

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  wrapper: {
    background: '#ffffff',
    justifyContent: 'space-between',

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
  },
  button: {
    height: '24px',
    fontSize: '11px',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginLeft: '20px',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  badge: {
    backgroundColor: theme.palette.secondary.light,
  },

  appTitle: {},
  grow: {
    flexGrow: 1,
  },

  menu: {
    width: 250,
    marginTop: 10,
    zIndex: theme.zIndex.tooltip,
  },
  suggestions: {
    width: 200,
    zIndex: theme.zIndex.tooltip,
  },
  username: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center',
  },
  adminPanelWrapper: {
    height: 50,
    width: '100%',
    backgroundColor: theme.palette.grey[750],
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 100,
  },
  adminPanelBlock: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 50,
  },
  adminPanelTitle: {
    paddingRight: 10,
    color: theme.palette.primary.light,
    fontSize: 12,
  },
  adminPanelSelect: {
    color: theme.palette.secondary.contrastText,
    // minWidth: 150,
    '& svg': {
      fill: theme.palette.lightBlue,
    },
  },
  adminPanelButton: {
    color: theme.palette.lightBlue,
    fontWeight: 400,
  },
}));
