import React from 'react';
import './Dashboard2.css';
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from './Navbar';
import Add from './Add';
import Feed from './Feed';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import { ThemeProvider } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Dashboard2() {

  const classes = useStyles();
  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};