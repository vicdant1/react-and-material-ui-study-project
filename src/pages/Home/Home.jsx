import useStyles from './homeStyles';
import Grid from '@material-ui/core/Grid';
import savings from '../../img/savings.svg';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

// import LinkButton from '../../components/LinkButton/LinkButton';

const Home = () => { 
    const classes = useStyles();
    return(
        <section className="page">
            <Grid className={classes.mainContainer} container justifyContent="space-between" direction="row" alignItems="center">
                <Grid item xs={12} md={8}>
                    <Typography variant='h3'>
                        Welcome to <span className={classes.span}>Costs</span>.
                    </Typography>
                    <Typography variant='h6'>
                        Create and manage projects right now!
                    </Typography>
                    
                    <Box mt={2}>
                        <Link to='/newproject' className={classes.linkButton}>
                            <Button variant='outlined'>Create a new project</Button>
                        </Link>
                    </Box>

                    {/* 
                        second option
                        <LinkButton to='/newproject' text='Create new project'/>
                    */}
                    
                </Grid>
                <Grid item xs={12} md={4} >
                    <img className={classes.savingImg} src={savings} alt='costs'/>
                </Grid>
            </Grid>
        </section>
    )
}
export default Home