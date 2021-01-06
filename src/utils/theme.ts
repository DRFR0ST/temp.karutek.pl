import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "rgb(22, 167, 184)",
            contrastText: "#FFF"
        },
        background: {
            default: "#FFF",
            paper: "#FFF"
        },
        text: {
            primary: "#000"
        }
    }
});

export const DARK_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "rgb(22, 167, 184)",
            contrastText: "#FFF",
        },
        background: {
            default: "#121212",
            paper: "#212121"
        },
        text: {
            primary: "#FFF"
        }
    }
});

export type LightTheme = typeof LIGHT_THEME;
export type DarkTheme = typeof DARK_THEME;