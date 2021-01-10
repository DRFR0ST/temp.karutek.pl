import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: any) => createStyles({
    root: {
        backgroundColor: "#121212",
        minHeight: 64,
        color: "#FFF",
        paddingTop: "15px"
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    }
}));

export default styles;