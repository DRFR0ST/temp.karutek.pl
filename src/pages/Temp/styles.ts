// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
    root: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
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
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        width: "50%", height: "100%"
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
        width: "185px",
        height: "auto",
        borderRadius: "100%",
        marginTop: "8px"
    },
    socialIcon: {
        margin: "0 8px",
        opacity: 0.8,
        transition: "opacity 255ms ease",
        cursor: "pointer",
        "&:hover": {
            opacity: 1
        }
    }
}));