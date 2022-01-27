import { Grid, Typography, Fab, Box, Button } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons/";
import useStyles from "../Company/companyStyles";
import analytics from '../../img/analytics_media.svg'
import happy2022 from '../../img/happy_2022.svg'

const Company = () => {
  const classes = useStyles();

  return (
    <div className="page">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Let's Costs</Typography>
          <Typography variant="overline">We will rock ya</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box className={classes.descText}>
            <Typography variant="h5">Before we leave UK...</Typography>
            <Typography variant="body1" align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              hic quaerat ipsum accusantium corrupti vero aliquam aut, eum
              eligendi cupiditate necessitatibus voluptatibus vel repudiandae
              dolores, ab voluptate repellendus saepe minima. Provident amet sit
              corrupti id cum consectetur nobis, ut, quam rerum dolorum suscipit
              nesciunt ipsam laudantium odio iste ea totam accusamus consequatur
              dolorem eveniet sapiente, assumenda ex natus. Suscipit, dolor?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              animi reprehenderit modi perspiciatis omnis nam quidem sequi non
              iure, itaque in, voluptas voluptatum optio eligendi culpa. Ut nemo
              saepe blanditiis? Reiciendis doloribus possimus alias assumenda,
              quasi quidem in repellat provident quam quod porro, magnam
              molestiae numquam consequuntur. Ducimus velit id rem quo
              voluptatibus maiores porro nemo. Quidem perspiciatis veritatis
              totam! Incidunt odio, commodi, assumenda veniam id vel sed
              molestias eum magnam reiciendis iure quidem. Veritatis cupiditate
              sint explicabo aut, quia inventore distinctio at laborum quis,
              modi illo animi, ad deserunt.
            </Typography>
          </Box>
          <hr />
          <Box className={classes.descText}>
            <Typography variant="h5" align="right">
              ... Everything changed.
            </Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img className={classes.textSvg} src={analytics} alt="analytics"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam hic quaerat ipsum accusantium corrupti vero aliquam
                    aut, eum eligendi cupiditate necessitatibus voluptatibus vel
                    repudiandae dolores, ab voluptate repellendus saepe minima.
                    Provident amet sit corrupti id cum consectetur nobis, ut,
                    quam rerum dolorum suscipit nesciunt ipsam laudantium odio
                    iste ea totam accusamus consequatur dolorem eveniet
                    sapiente, assumenda ex natus. Suscipit, dolor?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <hr />
          <Box className={classes.descText}>
            <Typography variant="h5">Don't worry about a thing</Typography>
            <Typography variant="body1" align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              hic quaerat ipsum accusantium corrupti vero aliquam aut, eum
              eligendi cupiditate necessitatibus voluptatibus vel repudiandae
              dolores, ab voluptate repellendus saepe minima. Provident amet sit
              corrupti id cum consectetur nobis, ut, quam rerum dolorum suscipit
              nesciunt ipsam laudantium odio iste ea totam accusamus consequatur
              dolorem eveniet sapiente, assumenda ex natus. Suscipit, dolor?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              animi reprehenderit modi perspiciatis omnis nam quidem sequi non
              iure, itaque in, voluptas voluptatum optio eligendi culpa. Ut nemo
              saepe blanditiis? Reiciendis doloribus possimus alias assumenda,
              quasi quidem in repellat provident quam quod porro, magnam
              molestiae numquam consequuntur. Ducimus velit id rem quo
              voluptatibus maiores porro nemo. Quidem perspiciatis veritatis
              totam! Incidunt odio, commodi, assumenda veniam id vel sed
              molestias eum magnam reiciendis iure quidem. Veritatis cupiditate
              sint explicabo aut, quia inventore distinctio at laborum quis,
              modi illo animi, ad deserunt.
            </Typography>
          </Box>
          <hr />
          <iframe
            title="map component"
            className={classes.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.16468887253!2d-35.20763855029732!3d-5.832393359096453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff8566fe1f6f%3A0xd35194a8cdd83856!2sIMD%20-%20Instituto%20Metrop%C3%B3le%20Digital%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN%2C%2059076-560!5e0!3m2!1spt-BR!2sbr!4v1643304872372!5m2!1spt-BR!2sbr"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item sm={2}>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{display: {xs: "none", sm: "block"}}}>
            <Typography variant="h5" align="center">
              Coming soon... <br/>
              Happy 2022!
            </Typography>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
            <img className={classes.genericSvg} src={happy2022} alt="happy new year (2022)"/>
          </Box>
        </Grid>
      </Grid>
      <a href="https://youtu.be/dQw4w9WgXcQ" rel="noreferrer" target="_blank">
        <Fab
          className={`${classes.fabButton} shake`}
          color="secondary"
          aria-label="add"
        >
          <WhatsApp />
        </Fab>
      </a>
    </div>
  );
};
export default Company;
