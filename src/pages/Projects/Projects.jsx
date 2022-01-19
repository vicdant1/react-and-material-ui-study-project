import react, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Snackbar, Typography, Box, Button, Grid } from "@material-ui/core";
import useStyles from "./projectsStyles";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const location = useLocation();
  const success = location.state;
  const [open, setOpen] = useState(success);
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">My projects</Typography>
        <Link to="/newproject">
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </Link>
      </Box>
      <Box mt={3}>
        <Grid container spacing={2}>
          {projects.map((project, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <ProjectCard name={project.ProjectName} deadline={project.ProjectDeadline} budget={project.ProjectBudget} category={project.ProjectCategory}/>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={
          success ? "Project created successfully" : "Something went wrong :'("
        }
        classes={{
          root: success
            ? classes.projectSnackSuccess
            : classes.projectSnackFail,
        }}
      />
    </div>
  );
};

export default Projects;
