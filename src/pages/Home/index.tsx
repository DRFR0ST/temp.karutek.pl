// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.png'
import FontAwesome from 'components/FontAwesome'

// Component scoped imports.
import styles from "./styles";

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const classes = useStyles();

    const handleNavigation = (url: string) => () => {
        window.open(url);
    }

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <div className={classes.contentContainer}>
            <div className={classes.contentWrapper}>
                <img alt="logo" src={logo} className={classes.logo} />
                <div>
                    <h1 style={{ textTransform: "uppercase", marginBottom: "5px", fontSize: "48px", lineHeight: "45px" }}>Jesteśmy <br />w trakcie przebudowy</h1>
                    <p style={{ opacity: 0.45 }}>Nasza witryna już w krótce będzie dla was dostępna.<br />Zapraszamy do śledzenia nas w mediach społecznościowych.</p>

                    <br /><br />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", opacity: 0.4 }}>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://fb.karutek.pl/") }} className={classes.socialIcon} >fab fa-facebook</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://ig.karutek.pl/") }} className={classes.socialIcon} >fab fa-instagram</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("mailto://contact@karutek.pl") }} className={classes.socialIcon} >fas fa-envelope</FontAwesome>
                    </div>
                </div>
                <div style={{ height: "15vh" }}></div>
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