// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
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
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        opacity: 0.8
    },
    cardFrontContainer: {
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        opacity: 1
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