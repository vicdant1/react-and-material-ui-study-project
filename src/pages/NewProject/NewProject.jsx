import { Typography, Grid } from "@material-ui/core"
import ProjectForm from "../../components/ProjectForm/ProjectForm"
import useStyles from './newProjectStyles'

const NewProject = () => { 
    const classes = useStyles();
    return(
        <div className="page">
            <Typography variant='h3'>
                Create a new project
            </Typography>

            <Typography variant='subtitle1'>
                Create a new project to carry up the services
            </Typography>
            
            <Grid container>
                <Grid item xs={12}>
                    <ProjectForm className={classes.projectForm}/>
                </Grid> 
            </Grid>
        </div>
    )
}

export default NewProject