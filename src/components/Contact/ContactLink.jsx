import Typography from '@mui/material/Typography';

export default function ContactLink({ Icon, link, children }) {
    return (
        <Typography align='center' variant='h6'>
            <a href={link} target="_blank" rel="noopener">
                {Icon} {children}</a>
        </Typography>
    );
}