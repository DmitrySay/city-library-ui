import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundColor: theme.palette.primary.light,
    },
    paper: {
        padding: theme.spacing(8),
        width: 500,

        '& h4': {
            letterSpacing: '-1.08px',
        },

        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            zIndex: 1,
            borderRadius: 0,
        },
    },
    logo: {
        margin: '40px 0',
        with: '50px',
        height: '50px'
    },
    button: {
        margin: '32px 0 41px 0',
        fontSize: '11px',
    },
    icon: {color: theme.palette.primary.light},
    eye: {
        color: theme.palette.primary.light,
        cursor: 'pointer',
    },
    policy: {
        position: 'absolute',
        bottom: 0,
        color: theme.palette.grey[100],
        width: '100%',
        textAlign: 'center',
        marginBottom: '33px',
    },
    form: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    }
}));
