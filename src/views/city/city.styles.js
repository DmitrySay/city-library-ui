import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '75%',
        minHeight: '350px',
        padding: '20px'
    },
    editButton: {
        color: theme.palette.primary.main,
        height: '22px',
        width: '60px',
        textDecoration: 'underline',
        marginLeft: '10px',

        '& span:nth-child(2)': {
            marginTop: '0',
        },
    }
}));
