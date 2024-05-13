import Typography from '@mui/material/Typography';

export default function ContactItem({ Icon, children }) {
    return (
        <Typography align='center' variant='h6'>
            {Icon} {children}
        </Typography>
    );
}