import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{opacity: '0.8'}}>
        <Toolbar style={{backgroundColor: '#ffecb3'}}>
          <Typography variant="h6" color="inherit" /*style={{color: 'white'}}*/>
            Шоколад
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(SimpleAppBar);