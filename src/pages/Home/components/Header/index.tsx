// Deps scoped imports.
import React from "react";
import { Box, Container, makeStyles, Tooltip } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import Logo from 'components/Logo/';
import FontAwesome from 'components/FontAwesome'
import CalendlyDialog from "components/CalendlyDialog/"

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Header = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const handleNavigation = (url: string) => () => {
        window.open(url);
    }

    return <Box className={cx(classes.root)}>
        <Container>
            <Box display="flex" justifyContent="space-evenly" alignItems="flex-start" height="100%" width="100%" position="relative">
                <Box alignItems="flex-start" justifyContent="space-between" flexDirection="column" width="50%" height="100%" display="flex">
                    <Box>
                        <Logo style={{ margin: "10px 0" }} />
                    </Box>

                    <Box>
                        <h1 style={{ whiteSpace: "pre-wrap", textTransform: "uppercase", marginBottom: "5px", fontSize: "48px", lineHeight: "45px", fontFamily: "'Pompiere', cursive" }}>{translated.title}</h1>
                        <p style={{ opacity: 0.6, whiteSpace: "pre-wrap" }}>{translated.slogan}</p>

                        <br />
                        <CalendlyDialog />
                        <br />
                    </Box>

                    {/* <Box className={classes.dummy}></Box> */}
                    <Box className={classes.socialIconContainer} display="flex" alignItems="center" justifyContent="flex-start">
                        <Tooltip title="Facebook">
                            <FontAwesome iconProps={{ onClick: handleNavigation("https://fb.karutek.pl/") }} className={classes.socialIcon} >fab fa-facebook</FontAwesome>
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <FontAwesome iconProps={{ onClick: handleNavigation("https://ig.karutek.pl/") }} className={classes.socialIcon} >fab fa-instagram</FontAwesome>
                        </Tooltip>
                        <Tooltip title="E-Mail">
                            <FontAwesome iconProps={{ onClick: handleNavigation("mailto://contact@karutek.pl") }} className={classes.socialIcon} >fas fa-envelope</FontAwesome>
                        </Tooltip>
                    </Box>
                </Box>

                <HeaderPhotos />
            </Box>
        </Container>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Header;


const HeaderPhotos = () => {
    const classes = useStyles();

    return <Box width="50%" height="100%" display="flex" alignItems="center" justifyContent="flex-end" position="relative">
        <div style={{ borderRadius: "1000px", backgroundColor: "#FFF", width: "600px", height: "600px", position: "relative" }}>

            <Box className={cx(classes.cardContainer, classes.cardFrontContainer, classes.cardContainer01)} position="absolute" width="540px" height="355px">
                <img alt="someimage" className={classes.cardImage} src="https://source.unsplash.com/5NLCaz2wJXE/540x355" />
            </Box>
            <Box className={cx(classes.cardContainer, classes.cardContainer02)} position="absolute" width="485px" height="300px">
                <img alt="someimage" className={classes.cardImage} src="https://source.unsplash.com/PQeoQdkU9jQ/485x300" />
            </Box>
            <Box className={cx(classes.cardContainer, classes.cardContainer03)} position="absolute" width="485px" height="300px">
                <img alt="someimage" className={classes.cardImage} src="https://source.unsplash.com/yQEcRJkmH3I/485x300" />
            </Box>

        </div>
    </Box>;
}