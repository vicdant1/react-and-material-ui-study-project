import { Facebook, LinkedIn, Instagram } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import useStyles from "./footerStyles"
import { Link } from "react-router-dom";

// className funciona exatamente como o class do html padrão, por isso, essa situação pode ocorrer: className="a b c x"
// para trabalhar bem com esse elemento e o Material UI, sugiro uma interpolação className=`${classes.class} bootstrap etc`

const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <div className={classes.socialList}>
                <IconButton color='inherit' classes={{root: classes.iconContainer}}><Facebook 
                className={`${classes.icon} t-2`} /></IconButton>
                <IconButton color='inherit' classes={{root: classes.iconContainer}}><LinkedIn
                className={`${classes.icon} t-2`} /></IconButton>
                <IconButton color='inherit' classes={{root: classes.iconContainer}}><Instagram 
                className={`${classes.icon} t-2`}  /></IconButton>
            </div>
            <p>
                &copy; 2022 <span className={classes.span}>Costs</span>. Projects are property of their respective owners.<br/>
                Costs Inc. | Headquarters are in Natal, Porto Alegre, Brazil | <Link to='/support'>Support</Link>
            </p>
        </footer>
    )
}

export default Footer