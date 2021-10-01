import React, {useRef} from 'react';
import {BrowserRouter as Router, Link as RouterLink, Redirect, Route, Switch as RouterSwitch,} from 'react-router-dom';
import AxiosInterceptors from './api/axiosInterceptors';
import AppContextProvider from './store/CombinedContextProvider';
import PATHS from './router/paths';
import {ThemeProvider} from '@material-ui/styles';
import theme from './styles/theme';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Paper} from '@material-ui/core';
import Header from './views/layout/header';
import Footer from './views/layout/footer';
import CityList from "./views/cityList/CityList";
import SignIn from "./views/auth/SignIn";
import City from "./views/city/City";
import {SnackbarProvider} from "notistack";

function App() {
    const notistackRef = useRef();
    const onClickDismiss = (key) => () => {
        notistackRef.current.closeSnackbar(key);
    };


    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                ref={notistackRef}
                maxSnack={3}
                autoHideDuration={5000}
                variant="success"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                action={(key) => (
                    <Button
                        onClick={onClickDismiss(key)}
                        style={{
                            height: '100%',
                            width: '100%',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                        }}
                    />
                )}
            >
                <Router>
                    <AppContextProvider>
                        <AxiosInterceptors>
                            <Header/>
                            <div>
                                <RouterSwitch>
                                    <Route exact path="/" render={() => <Redirect to={{pathname: PATHS.cities}}/>}/>
                                    <Route path={`${PATHS.cities}`} exact component={CityList}/>
                                    <Route path={`${PATHS.city}`} exact component={City}/>
                                    <Route path={`${PATHS.signIn}`} component={SignIn}/>
                                    <Route path="*">
                                        <NoMatch/>
                                    </Route>
                                </RouterSwitch>
                            </div>
                            <Footer/>
                        </AxiosInterceptors>
                    </AppContextProvider>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
    },
    paper: {
        padding: theme.spacing(4),
        minWidth: 500,
        minHeight: 350,
    },
    logo: {
        height: 80,
    },
}));


function NoMatch() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={4}>
                <Grid container justifyContent="space-around" alignItems="center" className={classes.paper}>
                    <Grid item>
                        <h1>404</h1>
                        <h5>Page Not Found</h5>
                        <br/>
                        <br/>
                        <Button color="primary" variant="contained" component={RouterLink} to={PATHS.cities}>
                            Return
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default App;
