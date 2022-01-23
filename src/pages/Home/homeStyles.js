import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    savingImg: {
        display: 'block',
        width: '100%'
    },
    span: {
        backgroundColor: '#222',
        color: '#FFBB33',
    },
    linkButton: {
        marginTop: '1rem !important'
    },
    mainContainer:{
        [theme.breakpoints.down("sm")]: {   
            flexDirection: "column",
            textAlign: "center",
            gap: "2rem",
            '& h3': {
                wordBreak: "break-word"
            }
        }
    }
}));

export default useStyles