import { useState } from 'react';
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

function SubscriptionScreen({ language = 'es' }) {
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const t = translations[language];

  const handleSubscribe = (planType) => {
    setIsLoading(true);
    setAlertMessage('');
    
    // Simular una operación asíncrona
    setTimeout(() => {
      console.log(`Subscribing to ${planType} plan`);
      setIsLoading(false);
      setAlertMessage(t.success);
      setAlertSeverity('success');
    }, 1500);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {t.title}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Plan Mensual */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {t.monthly.name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {t.monthly.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSubscribe('monthly')}
                disabled={isLoading}
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
                disabled={isLoading}
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
      </Box>
    </Container>
  );
}

export default SubscriptionScreen; 