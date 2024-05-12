import './Footer.css';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Container component="footer" square variant="outlined">
            <Typography id="bg-link" align="right">
                <Link href="https://pixabay.com/users/rostislavuzunov-8621397/" underline="none" color="white" target="_blank" rel="noreferrer">
                    background: Rostislav Uzunov
                </Link>
            </Typography>
        </Container>
    );
}