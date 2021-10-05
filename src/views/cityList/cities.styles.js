import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        padding: '20px'
    },
    image: {
        minWidth: '350px',
        minHeight: '350px',
    }
}));
