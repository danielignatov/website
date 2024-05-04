import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Grid container spacing={2} sx={{ paddingBottom: 3 }}>
            <Grid item xs={12}>
                <Typography variant='h4' align='center'>Daniel<strong>Ignatov</strong></Typography>
                <Typography align='center'><strong>Software</strong>Developer</Typography>
            </Grid>
        </Grid>
    );
}