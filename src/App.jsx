import { Container, Typography, Button, Box } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import ResponsiveAppBar from './components/NavBar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Aura
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Your React application with Material UI is ready!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Favorite />}
            size="large"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App; 