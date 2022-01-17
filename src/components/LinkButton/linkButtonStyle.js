import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    linkButton: {
        backgroundColor: '#FFBB33',
        '&:hover': {
            backgroundColor: '#ffc042'
        },
        padding: '.8rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '8px',
        width: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default useStyles