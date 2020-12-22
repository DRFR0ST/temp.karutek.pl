// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera, useLitteraMethods } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.png'
import FontAwesome from 'components/FontAwesome'

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const { setLocale } = useLitteraMethods();
    const classes = useStyles();

    const handleNavigation = (url: string) => () => {
        window.open(url);
    }

    const handleLanguage = (locale: string) => () => {
        setLocale(locale);
    }

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <div className={classes.contentContainer}>
            <div className={classes.contentWrapper}>
                <img alt="logo" src={logo} className={classes.logo} />
                <div>
                    <h1 style={{ whiteSpace: "pre-wrap", textTransform: "uppercase", marginBottom: "5px", fontSize: "48px", lineHeight: "45px" }}>{translated.title}</h1>
                    <p style={{ opacity: 0.45, whiteSpace: "pre-wrap" }}>{translated.slogan}</p>

                    <br /><br />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", opacity: 0.4 }}>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://fb.karutek.pl/") }} className={classes.socialIcon} >fab fa-facebook</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://ig.karutek.pl/") }} className={classes.socialIcon} >fab fa-instagram</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("mailto://contact@karutek.pl") }} className={classes.socialIcon} >fas fa-envelope</FontAwesome>
                    </div>
                </div>
                <div style={{ height: "15vh", display: "flex", justifyContent: "flex-end", width: "100%", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "180px" }}>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('pl_PL')}>Polski</p>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('de_DE')}>Deutsch</p>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('en_US')}>English</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.imageWrapper}>
            <img alt="thumbnail" src={`https://source.unsplash.com/0J_W8DQzDas/${window.innerWidth / 2}x${window.innerHeight}`} className={classes.image} />
        </div>
    </div>
}

// Creates a hook for generating classnames.
// @ts-ignore
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Home;