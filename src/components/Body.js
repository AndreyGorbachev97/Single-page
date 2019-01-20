import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import CarIcon from '@material-ui/icons/DirectionsCarOutlined';
import RestaurantIcon from '@material-ui/icons/RestaurantOutlined';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    Body: { 
        display: 'flex',
        justifyContent: 'center',
        color: 'white',       
        marginTop: '5%'      
    },
    Title: {
        fontSize: '50px', 
    },
    Table: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#e0e0e0'
    },
    Icon: { 
        width: 60,
        height: 60,
        color: '#e0e0e0'
    }, 
    Button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: '5%',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        width: '90%',
        padding: '0 30px',
      },
  });

class Body extends Component{

    
    render(){
        console.log(this.props);
        const {classes} = this.props
        return(
            <div className={classes.Body}>
                <Grid container spacing={24} style={{width: '60%'}}>
                    <Grid item xs={12}>
                        <div className={classes.Title}>
                            Лучший шоколад в каневском районе оптом!
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <CarIcon className={classes.Icon}/>
                        <span className={classes.Table}>
                            Доставка всего 50 рублей 
                            в любое место станицы Каневской
                            и Стародеревянковской
                        </span>                       
                    </Grid>
                    <Grid item xs={4} >                     
                        <AssignmentIcon className={classes.Icon} />
                        <span className={classes.Table}>                       
                            Уникальное предложение, только у нас вы можете 
                            покупать киллограммы замечательного шоколада
                        </span>                          
                    </Grid>     
                    <Grid item xs={4}>
                        <RestaurantIcon className={classes.Icon}/>
                        <span className={classes.Table}>
                            На ваш выбор предоставляется несколько видов изиссканного 
                            вкуса шоколада
                        </span>            
                    </Grid>   
                    <Grid item xs={4}/>                                     
                    <Grid item xs={4} >
                        <Button variant="outlined" className={classes.Button}>
                            Заказать
                        </Button>
                    </Grid>   
                    <Grid item xs={4}/>         
                </Grid> 
                   
            </div>
        )
    }
}

export default withStyles(styles)(Body) 