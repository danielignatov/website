import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Contact() {
    return (
        <Grid container spacing={2} sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <Grid item xs={12} lg={4}>
                <Typography align='center' variant='h6'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Sofia, Bulgaria
                </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Typography align='center' variant='h6'>
                    <a href="https://github.com/danielignatov" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> github/danielignatov</a>
                </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Typography align='center' variant='h6'>
                    <a href="https://www.linkedin.com/in/danielignatov/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} /> linkedin/danielignatov</a>
                </Typography>
            </Grid>
        </Grid>
    );
}