import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const baseTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    fontFamily: ["'Segoe UI'", "'Roboto'", "'Arial'", "'sans-serif'"].join(",")
  }
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
