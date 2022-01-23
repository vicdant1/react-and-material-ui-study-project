import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainForm: {

    },
    formContainer: {
        marginTop: '2rem'
    },
    form: {
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    nestedElementsBox: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        }
    }
}));

export default useStyles