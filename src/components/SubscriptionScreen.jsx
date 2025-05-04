import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Grid,
  CircularProgress,
  Alert,
  Chip
} from '@mui/material';
import { ethers } from 'ethers';
import contractABI from '../contracts/SubscriptionContract.abi.json';

const translations = {
  en: {
    title: 'AURA Premium Subscription',
    monthly: {
      name: 'Monthly Plan',
      price: '0.01 ETH',
      button: 'Subscribe Monthly'
    },
    annual: {
      name: 'Annual Plan',
      price: '0.1 ETH',
      discount: 'Save 15%!',
      button: 'Subscribe Annual'
    },
    loading: 'Processing subscription...',
    success: 'Subscription successful!',
    error: 'Error processing subscription'
  },
  es: {
    title: 'Suscripción Premium AURA',
    monthly: {
      name: 'Plan Mensual',
      price: '0.01 ETH',
      button: 'Suscribirse Mensual'
    },
    annual: {
      name: 'Plan Anual',
      price: '0.1 ETH',
      discount: '¡Ahorra 15%!',
      button: 'Suscribirse Anual'
    },
    loading: 'Procesando suscripción...',
    success: '¡Suscripción exitosa!',
    error: 'Error al procesar la suscripción'
  }
};

const MXNB_TOKEN_ADDRESS = "0x82B9e52b26A2954E113F94Ff26647754d5a4247D";
const ERC20_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)"
];

function SubscriptionScreen({ language = 'es', walletAddress: walletAddressProp, contractAddress }) {
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [walletAddress, setWalletAddress] = useState(walletAddressProp || '');
  const [walletChecked, setWalletChecked] = useState(false);
  const t = translations[language];

  useEffect(() => {
    async function checkWallet() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } else {
        setAlertMessage('No crypto wallet found. Please install MetaMask or a compatible wallet.');
        setAlertSeverity('error');
      }
      setWalletChecked(true);
    }
    checkWallet();
  }, []);

  const handleConnectWallet = async () => {
    if (!window.ethereum) {
      setAlertMessage('No crypto wallet found. Please install MetaMask or a compatible wallet.');
      setAlertSeverity('error');
      return;
    }
    try {
      const reqAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (reqAccounts.length > 0) {
        setWalletAddress(reqAccounts[0]);
        setAlertMessage('');
      }
    } catch (err) {
      setAlertMessage(language === 'es' ? 'Conexión rechazada por el usuario.' : 'Connection rejected by user.');
      setAlertSeverity('warning');
    }
  };

  const handleSubscribe = async (planType) => {
    setIsLoading(true);
    setAlertMessage('');
    if (!contractAddress) {
      setAlertMessage(language === 'es'
        ? 'Dirección del contrato no configurada.'
        : 'Contract address not set.');
      setAlertSeverity('error');
      setIsLoading(false);
      return;
    }
    try {
      if (!window.ethereum) throw new Error('No crypto wallet found');
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const mxnb = new ethers.Contract(MXNB_TOKEN_ADDRESS, ERC20_ABI, signer);
      const decimals = 6;
      let price;
      let planTypeNum;
      if (planType === 'monthly') {
        price = 10000000
        planTypeNum = 1;
      } else if (planType === 'annual') {
        price = 1000000
        planTypeNum = 2;
      } else {
        throw new Error('Invalid plan type');
      }
      // Check allowance
      const allowance = await mxnb.allowance(walletAddress, contractAddress);
      console.log("allowance", allowance)
      if (allowance.lt(price)) {
        const approveTx = await mxnb.approve(contractAddress, price);
        await approveTx.wait();
      }
      // Call subscribe
      const tx = await contract.subscribe(planTypeNum);
      await tx.wait();
      setAlertMessage(t.success);
      setAlertSeverity('success');
      // Call getSubscriber
      const subscriber = await contract.getSubscriber(walletAddress);
      console.log('Subscriber info:', subscriber);
    } catch (err) {
      setAlertMessage(t.error);
      setAlertSeverity('error');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {t.title}
      </Typography>

      {/* Connect Wallet Button */}
      {!walletAddress && walletChecked && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConnectWallet}
            size="large"
          >
            {language === 'es' ? 'Conectar Wallet' : 'Connect Wallet'}
          </Button>
        </Box>
      )}

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Plan Mensual */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {t.monthly.name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                0.00001 ARB
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSubscribe('monthly')}
                disabled={isLoading || !walletAddress}
              >
                {t.monthly.button}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Plan Anual */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {t.annual.name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {t.annual.price}
              </Typography>
              <Chip
                label={t.annual.discount}
                color="success"
                sx={{ mt: 1 }}
              />
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSubscribe('annual')}
                disabled={isLoading || !walletAddress}
              >
                {t.annual.button}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Área de Estado/Notificaciones */}
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        {isLoading && (
          <>
            <CircularProgress />
            <Typography variant="body1">{t.loading}</Typography>
          </>
        )}
        {alertMessage && (
          <Alert severity={alertSeverity} sx={{ width: '100%', maxWidth: 600 }}>
            {alertMessage}
          </Alert>
        )}
        {!walletAddress && walletChecked && !isLoading && (
          <Alert severity="warning" sx={{ width: '100%', maxWidth: 600 }}>
            {language === 'es' ? 'Por favor conecta tu wallet para suscribirte.' : 'Please connect your wallet to subscribe.'}
          </Alert>
        )}
      </Box>
    </Container>
  );
}

export default SubscriptionScreen; 