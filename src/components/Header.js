import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" style={{backgroundColor: 'rgba(255, 236, 179, 0.6)'}}>
        <Toolbar>
          <div style={{flexGrow: 1}}>
            ШоколадОтСаныча
          </div>
          <div style={{fontSize: '20px', marginRight: '2%'}}>8-928-878-451</div> 
          <Button color="secondary" variant="contained">Позвонить</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(SimpleAppBar);