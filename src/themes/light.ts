import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import { REDI_COLORS } from './constants';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: REDI_COLORS.orange,
      light: '#ff7d4b',
      dark: '#ff7d4b'
    },
    secondary: {
      main: '#C2E4ED',
      light: '#88D9F0',
      dark: REDI_COLORS.teal
    }
  },
});
