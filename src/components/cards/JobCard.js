import { Box, CardContent, Chip, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Card from '@mui/joy/Card';
import './card.css';
import { JCard } from '../styles/JCard.styled';


export default function JobCard(props) {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });

    return(<div >
        <JCard>
            <div id="position">{props.data.position}</div>
            <div id="company">{props.data.company}</div>
            <div id='location'>{props.data.location}</div>
        </JCard>
        {/* <Card
            variant="outlined"
            color="primary"
            elevation={3}
            sx={{
                minWidth: '100px',
                maxWidth: '350px',
                gap: 2,
                backgroundColor: "3f50b5",
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <CardContent>
                <Typography  level="h2" fontSize="lg" id="job-title" mb={0.5}>
                        Senior Software Engineer
                    </Typography>
                    <Typography fontSize="sm" mb={1}>
                        Google
                    </Typography>
                    <Typography>
                        New York City, NY
                    </Typography>
            </CardContent>
        </Card> */}
    </div>)
}