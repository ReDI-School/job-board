import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

import { REDI_COLORS } from './constants';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: REDI_COLORS.orange,
      light: '#f08c66',
      dark: '#f9cebe'
    },
    secondary: {
      main: REDI_COLORS.teal,
      light: '#8AC6D6',
      dark: '#CDE6EE'
    }
  },
});