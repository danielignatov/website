import meImg from '../assets/img/me.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function About() {
    return (
        <Grid container spacing={2} sx={{ paddingTop: 5, paddingBottom: 1 }}>
            <Grid item xs={12} md={3} lg={4} xl={4} ></Grid>
            <Grid item xs={12} md={3} lg={2} xl={2} >
                <Avatar sx={{ height: '100%', width: '100%' }} src={meImg} variant="rounded"
                    alt="photo of me" />
            </Grid>
            <Grid item xs={12} md={6} >
                <Typography>It's very easy for me to get passionate and invested in something that benefits not only
                    me but all people around me. I like to solve problems and optimize solutions. I try my
                    best to be committed, friendly and open to try new things.</Typography>
            </Grid>
        </Grid>
    );
}