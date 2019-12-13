import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  typography: {
    fontFamily: ["'Segoe UI'", "'Roboto'", "'Arial'", "'sans-serif'"].join(",")
  }
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
