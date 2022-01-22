import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.card.light,
    '&:hover': {
      backgroundColor: theme.palette.card.main,
    },
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}));

export default useStyles
