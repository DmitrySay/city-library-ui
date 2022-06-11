import React, { useMemo, useRef, useState } from 'react';
import useStyles from './header.styles';
import PATHS from '../../../router/paths';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import {
  Avatar,
  Button,
  ClickAwayListener,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ExitToApp } from '@material-ui/icons';
import FaceIcon from '@material-ui/icons/Face';

const authPathsRegex = `${PATHS.signIn}`;

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const { profile, invalidateToken } = useAuth();
  const profileAnchorRef = useRef(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSignOut = () => {
    history.push(PATHS.signIn);
    invalidateToken();
  };

  const isAuthLocation = useMemo(() => {
    return location.pathname.match(authPathsRegex) !== null;
  }, [location.pathname]);

  if (isAuthLocation) {
    return null;
  }

  const handleProfileMenuClick = () => {
    setShowProfileMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (profileAnchorRef.current && profileAnchorRef.current.contains(event.target)) {
      return;
    }

    setShowProfileMenu(false);
  };

  const profileHandler = () => {
    return (
      <>
        <Button
          classes={{ root: classes.button }}
          startIcon={<FaceIcon />}
          ref={profileAnchorRef}
          onClick={handleProfileMenuClick}
        >
          {profile.email}
        </Button>
        <Popper
          anchorEl={profileAnchorRef.current}
          placement="top"
          open={showProfileMenu}
          transition
          className={classes.suggestions}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <Grid container justifyContent="center" direction="column">
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                      <Grid
                        item
                        xs={12}
                        container
                        alignItems="center"
                        direction="column"
                        style={{ padding: 16 }}
                      >
                        <Avatar aria-label="profile-name" className={classes.avatar}>
                          {profile.email.substr(0, 2).toUpperCase()}
                        </Avatar>
                        <Tooltip title={profile.email}>
                          <Typography
                            className={classes.email}
                            variant="subtitle2"
                            display="block"
                          >
                            {profile.email}
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <List dense>
                        <ListItem button onClick={handleSignOut}>
                          <ListItemIcon>
                            <ExitToApp />
                          </ListItemIcon>
                          <ListItemText primary={'Sign Out'} />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    );
  };

  return (
    <>
      <header className={classes.root}>
        <div className={classes.headerContent}>
          {!!profile
            ? (profileHandler())
            : <RouterLink to={PATHS.signIn}>
              <Button
                size="small"
                className={classes.loginButton}
                startIcon={<ExitToAppIcon />}
              >
                Login
              </Button>
            </RouterLink>}
        </div>
      </header>
    </>
  );
};

export default Header;
