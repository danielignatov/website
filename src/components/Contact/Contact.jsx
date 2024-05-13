import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid';
import ContactLink from './ContactLink';
import ContactItem from './ContactItem';

export default function Contact() {
    return (
        <Grid container spacing={2} sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <Grid item xs={12} lg={4}>
                <ContactItem Icon={<FontAwesomeIcon icon={faMapMarkerAlt} />} >Sofia, Bulgaria</ContactItem>
            </Grid>
            <Grid item xs={12} lg={4}>
                <ContactLink Icon={<FontAwesomeIcon icon={faGithub} />} link="https://github.com/danielignatov" >linkedin/danielignatov</ContactLink>
            </Grid>
            <Grid item xs={12} lg={4}>
                <ContactLink Icon={<FontAwesomeIcon icon={faLinkedin} />} link="https://www.linkedin.com/in/danielignatov/" >linkedin/danielignatov</ContactLink>
            </Grid>
        </Grid>
    );
}