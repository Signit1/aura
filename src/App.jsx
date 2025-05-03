import { Container, Typography, Button, Box, TextField, Modal, Alert } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import ResponsiveAppBar from './components/NavBar';
import { useState } from 'react';
import blackList from '../blackList.json';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isBlacklisted, setIsBlacklisted] = useState(false);

  const handleSubmit = () => {
    const isInBlacklist = blackList.blacklistedAddresses.includes(walletAddress);
    setIsBlacklisted(isInBlacklist);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

          <Box sx={{ width: '100%', mt: 2 }}>
            <TextField
              fullWidth
              label="Wallet Address"
              variant="outlined"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              size="large"
            >
              Verify Wallet Address
            </Button>
          </Box>
        </Box>
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="verification-result-modal"
        aria-describedby="verification-result-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="verification-result-modal" variant="h6" component="h2" sx={{ mb: 2 }}>
            Verification Result
          </Typography>
          <Alert severity={isBlacklisted ? "error" : "success"} sx={{ mt: 2 }}>
            {isBlacklisted 
              ? "The wallet address is in the black list." 
              : "The wallet address is not in the black list."}
          </Alert>
          <Button 
            variant="contained" 
            onClick={handleCloseModal} 
            sx={{ mt: 2, width: '100%' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default App; 