import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Grid } from "@material-ui/core";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import useStyles from "./newProjectStyles";

const NewProject = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const submitData = async (project) => {
    await axios
      .post("http://localhost:5000/projects", project)
      .then((res) => {
        console.log(res);
        navigate("/projects", { state: true });
      })
      .catch((err) => {
        console.log(err);
        navigate("/projects", { state: false });
      });
  };

  return (
    <div className="page">
      <Typography variant="h3">Create a new project</Typography>

      <Typography variant="subtitle1">
        Create a new project to carry up the services
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          <ProjectForm
            className={classes.projectForm}
            submitData={submitData}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProject;
