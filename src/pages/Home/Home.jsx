import useStyles from './homeStyles';
import Grid from '@material-ui/core/Grid';
import savings from '../../img/savings.svg';
import { Typography } from '@material-ui/core';
import LinkButton from '../../components/LinkButton/LinkButton';

const Home = () => { 
    const classes = useStyles();
    return(
        <section className="page">
            <Grid container justifyContent="space-between" direction="row" alignItems="center">
                <Grid item>
                    <Typography variant='h3'>
                        Welcome to <span className={classes.span}>Costs</span>.
                    </Typography>
                    <Typography variant='h6'>
                        Create and manage projects right now!
                    </Typography>
                    <LinkButton to='/newproject' text='Create new project'/>   
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img className={classes.savingImg} src={savings} alt='costs'/>
                </Grid>
            </Grid>
        </section>
    )
}
export default Home