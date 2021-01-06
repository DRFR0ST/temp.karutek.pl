// Deps scoped imports.
import React, { useState } from "react";
import { Button, Dialog, DialogActions, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon"
import { useLittera } from "react-littera";
import cx from "classnames";
// @ts-ignore
import { InlineWidget } from "react-calendly";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";
import { DarkTheme, LightTheme } from "utils/theme";

/**
 * Example component
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const CalendlyDialog = (props: CalendlyDialogProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const theme = useTheme<LightTheme | DarkTheme>();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
        <div className={cx(classes.root, props.className)} style={props.style}>
            <Button variant="contained" size="large" color="primary" onClick={handleOpen}><Icon style={{ marginRight: "14px", fontSize: "20px" }}>event</Icon> {translated.reserve}</Button>
        </div>

        <Dialog scroll="body" disablePortal PaperProps={{ className: cx(classes.dialog) }} open={open} onClose={handleClose}>
            <InlineWidget url="https://calendly.com/karutek/photoshoot" styles={{ minWidth: "320px", height: "630px" }} pageSettings={{ primaryColor: stripHash(theme.palette.primary.main), textColor: stripHash(theme.palette.text.primary), backgroundColor: stripHash(theme.palette.background.paper) }} />
            <DialogActions>
                <Button variant="text" onClick={handleClose}>{translated.close}</Button>
            </DialogActions>
        </Dialog>
    </>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type CalendlyDialogProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default CalendlyDialog;


const stripHash = (val: string) => val.split("#")[1];