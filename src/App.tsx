import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import SortingAppbar from "./components/appbar/sorting-appbar";
import blue from "@material-ui/core/colors/blue";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  typography: {
    fontFamily: ["'Segoe UI'", "'Roboto'", "'Arial'", "'sans-serif'"].join(",")
  }
});

const App: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <SortingAppbar></SortingAppbar>
      </Container>
    </ThemeProvider>
  );
};

export default App;
