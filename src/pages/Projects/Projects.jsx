import react, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Snackbar, Typography, Box, Button, Grid } from "@material-ui/core";
import useStyles from "./projectsStyles";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Loading from "../../components/Loading/Loading";

const Projects = () => {
  const location = useLocation();
  const success = location.state == "created";
  const edited = location.state == "edited";
  const [open, setOpen] = useState(success || edited);
  const [projects, setProjects] = useState([]);
  const [stopLoading, setStopLoading] = useState(false);
  const classes = useStyles();

  const fetchData = () => {
    setStopLoading(false);
    setTimeout(async () => {
      await axios
        .get("http://localhost:5000/projects")
        .then((res) => setProjects(res.data))
        .catch((err) => console.log(err));
      setStopLoading(true);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteProject = async (projectId) => {
    if (window.confirm("Do you really want to DELETE this project?")) {
      await axios
        .delete(`http://localhost:5000/projects/${projectId}`)
        .then(fetchData());
    }
  };

  return (
    <div className="page">
      <Box
        className={classes.topContainer}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">My projects</Typography>
        <Link to="/newproject" className="addButtonLink">
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            color="secondary"
            className="addButton"
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
                <ProjectCard
                  name={project.ProjectName}
                  deadline={project.ProjectDeadline}
                  budget={project.ProjectBudget}
                  category={project.ProjectCategory}
                  projectId={project.id}
                  handleDeleteProject={handleDeleteProject}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {!stopLoading && <Loading />}
      {stopLoading && projects.length == 0 && (
        <Typography variant="h5">No projects yet :(</Typography>
      )}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={
          success || edited
            ? edited
              ? "Project edited successfully"
              : "Project created successfully"
            : "Something went wrong :'("
        }
        classes={{
          root:
            success || edited
              ? classes.projectSnackSuccess
              : classes.projectSnackFail,
        }}
      />
    </div>
  );
};

export default Projects;
