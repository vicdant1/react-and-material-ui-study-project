import { Link } from 'react-router-dom';
import useStyles from './linkButtonStyle';

const LinkButton = ({to, text}) => {
    const classes = useStyles();
    return (
        <Link to={to} className={`${classes.linkButton} t-4`}>
            {text}
        </Link>
    )
}

export default LinkButton