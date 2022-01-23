import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton, Box, Typography, Tooltip } from "@material-ui/core";
import { Edit, Close } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import ProjectForm from '../../components/ProjectForm/ProjectForm';

const Project = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(`http://localhost:5000/projects/${id}`);
      const project = data || {};

      setProjectData(project);
    }, 800);
  }, [id]);

  const toggleEditButton = () => {
    setOpenEdit(!openEdit);
  };

  const handleSubmit = async (editedProject) => {
    await axios.put(`http://localhost:5000/projects/${id}`, editedProject).then(() => {
      console.log(`Item ${id} have been edited.`);
      navigate("/projects", {state: "edited"})
    })
  }

  return (
    <Box className="page">
      {!projectData.ProjectName ? (
        <Loading />
      ) : (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{projectData.ProjectName}</Typography>
            <IconButton
              aria-label="editActionOpenClose"
              onClick={toggleEditButton}
            >
              {!openEdit ? <Edit /> : <Close />}
            </IconButton>
          </Box>

          {!openEdit ? (
            <Box mt={2} fontSize={20}>
              <b>Budget:</b> {projectData.ProjectBudget}
              <br />
              <b>Category:</b> {projectData.ProjectCategory}
              <br />
              <b>Deadline:</b> {projectData.ProjectDeadline}
              <br />
              <Tooltip title="Coming soon" arrow><b>Cost:</b></Tooltip> USD$ {projectData.ProjectCost || 0} (Coming soon)
              <br />
            </Box>
          ) : (
            <Box mt={2}>
              <ProjectForm submitData={handleSubmit} projectData={projectData}/>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Project;
