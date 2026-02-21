import './Footer.css';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Container component="footer" sx={{ backgroundColor: 'transparent' }}>
            <Typography id="bg-link" align="right" sx={{ backgroundColor: 'transparent' }}>
                <Link href="https://pixabay.com/users/rostislavuzunov-8621397/" underline="none" color="white" target="_blank" rel="noreferrer">
                    background: Rostislav Uzunov
                </Link>
            </Typography>
        </Container>
    );
}