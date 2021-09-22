import React, {useMemo} from 'react';
import useStyles from './footer.styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import PATHS from '../../../router/paths';
import {useLocation} from "react-router-dom";

const authPathsRegex = `${PATHS.signIn}`;

const Footer = () => {
    const classes = useStyles();
    const location = useLocation();

    const isAuthLocation = useMemo(() => {
        return location.pathname.match(authPathsRegex) !== null;
    }, [location.pathname]);

    if (isAuthLocation) {
        return null;
    }

    return (
        <footer className={classes.root}>
            <div className={classes.footer}>
                <div className={classes.footerContentContainer}>
                    <section></section>
                    <section className={classes.socialContainer}>
                        <>
                            <div className={classes.links}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                                    <FacebookIcon height="16px" width="16px"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
                                    <TwitterIcon/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                                    <InstagramIcon/>
                                </a>
                            </div>
                        </>
                    </section>
                </div>
                <div className={classes.copyright}>© 2021 City library web site.</div>
            </div>
        </footer>
    );
};

export default Footer;
