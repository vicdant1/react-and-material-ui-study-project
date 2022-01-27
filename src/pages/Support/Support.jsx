import planet from '../../img/planet.svg'
import { Box, Typography } from '@material-ui/core';
import useStyles from './supportStyles'

const Support = () => {
  const classes = useStyles();
  return (
    <div className="page">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img className={classes.profileSvg} src={planet} alt="profile-theme" />
      </Box>
      <br />
      <Typography variant="h3" align="center">
        Coming soon...
      </Typography>
    </div>
  );
};

export default Support;
