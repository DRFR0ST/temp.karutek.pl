// Deps scoped imports.
import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";

// Subcomponent imports.
import Header from "./components/Header/";
import Footer from "./components/Footer/";

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Header />
        <Footer />
    </Box>
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