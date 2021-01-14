import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: any) => createStyles({
    root: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary.main,
    },
    imageWrapper: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
        width: "50%", height: "100%", overflow: "hidden", position: "relative"
    },
    contentWrapper: {
        width: "70%", margin: "0 auto", height: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            width: "95%"
        }
    },
    contentContainer: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        width: "50%", height: "100%"
    },
    dummy: {
        position: "relative",
        width: "100%",
        height: "10px",
    },
    image: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "auto",
    },
    logo: {
        width: "120px",
        height: "auto",
        borderRadius: "100%",
        marginTop: "8px"
    },
    socialIcon: {
        margin: "0 8px",
        opacity: 0.7,
        transition: "opacity 255ms ease",
        cursor: "pointer",
        "&:hover": {
            opacity: 1
        },
        color: theme.palette.primary.contrastText
    },
    socialIconContainer: {
        padding: "10px 16px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "25px",
        width: "fit-content",
        marginTop: 15,
        marginBottom: 15
    },
    cardContainer: {
        top: "50%",
        left: "50%",
        overflow: "hidden",
        borderRadius: "15px",
        transformOrigin: "center center",
        opacity: 0.8
    },
    cardFrontContainer: {
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        opacity: 1
    },
    cardContainer01: {
        animation: `$cardAnim01 1500ms ${theme.transitions.easing.easeInOut}`,
        transformOrigin: "center center",
        transform: "rotate(5deg) translate(-40%, -50%)",
        zIndex: 500,
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

    },
    cardContainer02: {
        animation: `$cardAnim02 2000ms ${theme.transitions.easing.easeInOut}`,
        transformOrigin: "center center",
        transform: "rotate(-15deg) translate(-45%, -40%)",
        zIndex: 499,
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

    },
    cardContainer03: {
        animation: `$cardAnim03 2500ms ${theme.transitions.easing.easeInOut}`,
        transformOrigin: "center center",
        transform: "rotate(20deg) translate(-45%, -60%)",
        zIndex: 498,
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

    },
    "@keyframes cardAnim01": {
        "0%": {
            transform: "rotate(0deg) translate(-50%, -50%)",
            opacity: 0,
            boxShadow: "rgba(17, 17, 26, 0) 0px 4px 16px"
        },
        "50%": {
            opacity: 1,
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

        },
        "100%": {
            opacity: 1,
            transform: "rotate(5deg) translate(-40%, -50%)"
        },
    },
    "@keyframes cardAnim02": {
        "0%": {
            transform: "rotate(0deg) translate(-50%, -50%)",
            opacity: 0,
            boxShadow: "rgba(17, 17, 26, 0) 0px 4px 16px"
        },
        "50%": {
            opacity: 1,
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

        },
        "100%": {
            opacity: 1,
            transform: "rotate(-15deg) translate(-45%, -40%)"
        },
    },
    "@keyframes cardAnim03": {
        "0%": {
            transform: "rotate(0deg) translate(-50%, -50%)",
            opacity: 0,
            boxShadow: "rgba(17, 17, 26, 0) 0px 4px 16px"
        },
        "50%": {
            opacity: 1,
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",

        },
        "100%": {
            opacity: 1,
            transform: "rotate(20deg) translate(-45%, -60%)"
        },
    },
    cardImage: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "auto",
    }
}));

export default styles;