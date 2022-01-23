import { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import useStyles from "./projectFormStyles";
import NumberFormat from "react-number-format";
import { Save } from "@material-ui/icons";
import {
  Box,
  Grid,
  FormControl,
  Select,
  InputLabel,
  Button,
  MenuItem,
} from "@material-ui/core";

const ProjectForm = ({ submitData, projectData }) => {
  const classes = useStyles();
  const [budgetValue, setBudgetValue] = useState("");
  const [category, setCategory] = useState(0);
  const [selectData, setSelectData] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/categories")  
      .then((res) => setSelectData(res.data));
  }, []);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(project);
  };

  return (
    <Grid
      className={classes.formContainer}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid className={classes.mainForm} item xs={12} sm={6}>
        <form
          id="projectCreateForm"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            color="secondary"
            id="ProjectName"
            name="ProjectName"
            label="Project name"
            multiline
            variant="outlined"
            maxRows={4}
            onChange={(e) => handleChange(e)}
            fullWidth
            value={project.ProjectName}
            required
          />
          <NumberFormat
            value={budgetValue || project.ProjectBudget}
            className="foo"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"USD$ "}
            name="ProjectBudget"
            renderText={(value, props) => (
              <TextField
                {...props}
                onChange={(e) => {
                  setBudgetValue(e.target.value);
                  handleChange(e);
                }}
                value={value}
                fullWidth
                color="secondary"
                label="Project budget"
                multiline
                variant="outlined"
                required
              ></TextField>
            )}
          />
          <Box
            style={{ gap: "10px" }}
            display="flex"
            justifyContent="space-between"
            className={classes.nestedElementsBox}
          >
            <Grid item xs={12} sm={6}>
              <FormControl required fullWidth>
                <InputLabel htmlFor="ProjectCategory">Category</InputLabel>
                <Select
                  value={project.ProjectCategory || category}
                  inputProps={{
                    name: "ProjectCategory",
                    id: "1",
                  }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    handleChange(e);
                  }}
                >
                  <MenuItem aria-label="None" value={0}>
                    Select a category
                  </MenuItem>
                  {selectData.map((option, i) => {
                    return (
                      <MenuItem key={i} value={option.name}>
                        {option.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="datetime-local"
                label="Deadline"
                type="date"
                name="ProjectDeadline"
                value={project.ProjectDeadline || ''}
                required
                onChange={(e) => handleChange(e)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Box>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="secondary"
                startIcon={<Save />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ProjectForm;
