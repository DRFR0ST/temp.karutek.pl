import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: any) => createStyles({
    root: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "200px"
    },
    h1: {
        fontFamily: "RellyanCharlotte",
        color: theme.palette.text.primary,
        margin: 0,
        fontSize: 48,
    },
    p: {
        textTransform: "uppercase",
        color: theme.palette.text.primary,
        marginTop: -10,
        marginBottom: 0,
        fontSize: 12,
        fontFamily: "Arial",
        letterSpacing: 4,
    }
}));

export default styles;