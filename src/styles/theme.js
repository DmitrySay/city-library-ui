import _ from 'lodash';
import {createTheme} from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';


const theme = {
    palette,
    typography
};

const mergedTheme = _.merge(
    theme,
);

export default createTheme(mergedTheme);
