import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import logoAuraBlack from '../assets/logoAuraBlack.png';

const translations = {
  en: {
    welcome: 'Welcome',
    subtitle: 'Your trusted platform for wallet verification',
    username: 'Username',
    password: 'Password',
    login: 'Log In',
    userRequired: 'Username is required',
    passwordRequired: 'Password is required'
  },
  es: {
    welcome: 'Bienvenido',
    subtitle: 'Tu plataforma confiable para verificación de wallets',
    username: 'Usuario',
    password: 'Contraseña',
    login: 'Iniciar Sesión',
    userRequired: 'Usuario es requerido',
    passwordRequired: 'Contraseña es requerida'
  }
};

function Login({ onLogin, language = 'es' }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!username) newErrors.username = t.userRequired;
    if (!password) newErrors.password = t.passwordRequired;
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // En un caso real, aquí iría la validación contra un backend
    onLogin(username);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
          }}
        >
          <img 
            src={logoAuraBlack} 
            alt="Aura Logo" 
            style={{ 
              width: 400,
              marginBottom: 40,
            }} 
          />
          
          <Typography component="h1" variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
            {t.welcome}
          </Typography>
          
          <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
            {t.subtitle}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label={t.username}
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              label={t.password}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              {t.login}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login; 