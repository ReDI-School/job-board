import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import PublishIcon from '@material-ui/icons/Publish';

import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ThemeSwitcher from './ThemeSwitcher';
import { FormattedMessage } from '../i18n';

import RediLogo from './RediLogo';


const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: { flexGrow: 1 },
    unstyledLink: {
      textDecoration: 'inherit',
    },
    logo: {
      height: '48px',
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <AppBar color="inherit" position="fixed">
        <Toolbar>

          <Box className={classes.titleContainer}>
            <Link to="/">
              <RediLogo className={classes.logo} />
            </Link>
          </Box>
          <Hidden smDown>
            <Link to="/add" className={classes.unstyledLink}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PublishIcon />}
              >
                <FormattedMessage id="publishJobListing" />
              </Button>
            </Link>
            <Box marginLeft={1}>
              <ThemeSwitcher />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              open={drawerOpen}
              anchor="right"
              onClose={() => setDrawerOpen(false)}
            >
              <List>
                <ListItem>
                  <Box marginLeft={1}>
                    <ThemeSwitcher />
                  </Box>
                </ListItem>
                <ListItem>
                  <Link to="/add" className={classes.unstyledLink}>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<PublishIcon />}
                    >
                      <FormattedMessage id="publishJobListing" />
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
