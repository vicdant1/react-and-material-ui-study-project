import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { Delete as DeleteIcon, Create as CreateIcon } from '@material-ui/icons';
import useStyles from './projectCardStyles'

const ProjectCard = ({name, deadline, budget, category }) => {
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
    <Card classes={{root: classes.card}} className="t-4">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {deadline} {bull} {category}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {budget}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<DeleteIcon/>} size="small">Delete</Button>
        <Button startIcon={<CreateIcon/>} size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
