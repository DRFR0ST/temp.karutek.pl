// Deps scoped imports.
import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import cx from "classnames";

// Project scoped imports.
import styles from "./styles";

/**
 * Logo component
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Logo = (props: LogoProps) => {
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <h1 className={classes.h1} style={{ color: props.color }}>Karutek</h1>
        {!props.hideSlogan && <p className={classes.p} style={{ color: props.color }}>photography</p>}
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type LogoProps = {
    hideSlogan?: boolean;
    className?: string;
    style?: React.CSSProperties
    color?: string;
}

// Time to export! 🚚
export default Logo;