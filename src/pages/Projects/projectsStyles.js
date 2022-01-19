import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    projectSnackSuccess: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.alertSuccess.main,
        }
    },
    projectSnackFail: {
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.alertFail.main,
        }
    }
}));

export default useStyles