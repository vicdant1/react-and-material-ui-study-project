import profile from "../../img/profile.svg";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./contactStyles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className="page">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img className={classes.profileSvg} src={profile} alt="profile-theme" />
      </Box>
      <br/>
      <Typography variant="h3" align="center">
        Coming soon...
      </Typography>
    </div>
  );
};
export default Contact;
