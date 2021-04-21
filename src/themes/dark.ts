import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

import { REDI_COLORS } from './constants';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: REDI_COLORS.orange,
    },
    secondary: {
      main: REDI_COLORS.teal,
    },
  },
});