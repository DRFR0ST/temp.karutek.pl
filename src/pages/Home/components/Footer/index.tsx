// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Container } from "@material-ui/core";
import { useLitteraMethods } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import Logo from "components/Logo/index";

// Component scoped imports.
import styles from "./styles";

/**
 * Footer component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Footer = (props: FooterProps) => {
    const { setLocale, locale } = useLitteraMethods();
    const classes = useStyles();

    const handleLocaleChange = (locale: string) => () => {
        setLocale(locale);
    }

    return <><Box className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Logo hideSlogan style={{ margin: "0 auto" }} color="#FFF" />
            <Box alignItems="center" justifyContent="space-between" display="flex">
                <p>Copyright (c) 2020 Karutek</p>
                <Box alignItems="center" justifyContent="flex-end" display="flex">
                    <LocaleSwitchItem active={locale === "pl_PL"} short="PL" onClick={handleLocaleChange("pl_PL")} />
                    <LocaleSwitchItem active={locale === "en_US"} short="EN" onClick={handleLocaleChange("en_US")} />
                    <LocaleSwitchItem active={locale === "de_DE"} short="DE" onClick={handleLocaleChange("de_DE")} />
                </Box>
            </Box>
        </Container>
    </Box></>
}

const LocaleSwitchItem = (props: { active: boolean, short: string, onClick: () => void }) => {
    return <p onClick={props.onClick} style={{ textDecoration: props.active ? "underline" : "initial", margin: "0 6px", cursor: "pointer", opacity: props.active ? 1 : 0.8 }}>{props.short}</p>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type FooterProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Footer;