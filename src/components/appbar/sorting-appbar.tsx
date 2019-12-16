import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

const SortingAppbar: React.FC = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            aria-label="menu"
          >
            Sorting Visualizer
          </Typography>
          <Button className={classes.button} color="inherit">
            Bubble
          </Button>
          <Button className={classes.button} color="inherit">
            Merge
          </Button>
          <Button className={classes.button} color="inherit">
            Quicksort
          </Button>
        </Toolbar>
      </Appbar>
    </div>
  );
};

export default SortingAppbar;
