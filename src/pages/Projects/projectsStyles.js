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
    },
    topContainer: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            '& .addButtonLink' : {
                marginTop: "1.1rem",
                width: "100%"
            },
            '& .addButton': {
                width: "100%"
            }
        }
    }
}));

export default useStyles