import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import SortingAppbar from "./components/appbar/sorting-appbar";
import { ThemeProvider } from "@material-ui/core/styles";
import SortingChart, { BarData } from "./components/chart/sorting-chart";
import { Grid, Button, Slider, Typography } from "@material-ui/core";
import theme from "./components/theme/theme";

const App: React.FC = props => {
  const [data, setData] = useState<Array<BarData>>([]);

  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const newArr = () => {
    const newData = Array.from({ length: 30 }, (i, j) => ({
      key: j,
      val: getRandomInt(10, 90)
    }));

    setData(newData);
  };

  useEffect(() => {
    const newData = Array.from({ length: 30 }, (i, j) => ({
      key: j,
      val: getRandomInt(10, 90)
    }));

    setData(newData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <SortingAppbar></SortingAppbar>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ paddingTop: "20vh" }}>
              <SortingChart data={data}></SortingChart>
            </div>
          </Grid>
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item>
              <Button color="secondary" variant="contained" onClick={newArr}>
                New Array
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography id="size-slider" gutterBottom>
                Array Size
              </Typography>
              <Slider
                aria-labelledby="size-slider"
                valueLabelDisplay="auto"
                defaultValue={30}
                step={5}
                marks
                min={5}
                max={80}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
