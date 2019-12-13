import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import SortingAppbar from "./components/appbar/sorting-appbar";
import { ThemeProvider } from "@material-ui/core/styles";
import SortingChart, { BarData } from "./components/chart/sorting-chart";
import { Grid } from "@material-ui/core";
import theme from "./components/theme/theme";

const App: React.FC = props => {
  const [data, setData] = useState<Array<BarData>>([]);

  useEffect(() => {
    setData([
      { key: 0, val: 1 },
      { key: 1, val: 2 },
      { key: 3, val: 3 }
    ]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid></Grid>
        <SortingAppbar></SortingAppbar>
        <div style={{ paddingTop: "5em" }}>
          <SortingChart data={data}></SortingChart>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
