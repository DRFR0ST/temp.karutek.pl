// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    },
    dialog: {
        width: "70vw",
        [theme.breakpoints.down("md")]: {
            width: "90vw"
        },
    }
}));