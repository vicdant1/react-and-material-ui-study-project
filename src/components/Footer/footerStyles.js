import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: '#222',
        color: '#FFF',
        padding: '3rem',
        textAlign: 'center',
    },
    iconContainer: {
        '&:hover $icon': {
            color: '#FFBB33'
        }
    },
    icon: {
        color: '#FFF',
    },
    span: {
        color: '#FFBB33',
        fontWeight: 'bold'
    }
    
}));

export default useStyles