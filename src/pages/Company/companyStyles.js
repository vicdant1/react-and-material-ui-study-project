import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mapFrame: {
    marginTop: "1.3rem",
    width: "100%",
    height: 450,
    border: 0,
    [theme.breakpoints.down("sm")]: {
      minHeigh: 300,
      height: "auto",
    },
  },
  fabButton: {
    position: "fixed",
    bottom: 16,
    right: 16,
  },
  descText: {
    padding: "1rem 0"
  },
  textSvg: {
    display: "block",
    width: "100%",
    maxHeight: 245
  }
}));

export default useStyles;
