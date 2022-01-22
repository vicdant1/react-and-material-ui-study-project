import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { Delete as DeleteIcon, Create as CreateIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./projectCardStyles";

const ProjectCard = ({
  name,
  deadline,
  budget,
  category,
  projectId,
  handleDeleteProject,
}) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }} className="t-4">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {category} {bull} {deadline}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {budget}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => handleDeleteProject(projectId)}
        >
          Delete
        </Button>
        <Link to={`/project/${projectId}`}>
          <Button startIcon={<CreateIcon />} size="small">
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
