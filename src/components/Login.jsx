import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import logoAuraBlack from '../assets/logoAuraBlack.png';

const translations = {
  en: {
    welcome: 'Welcome',
    subtitle: 'Your trusted platform for wallet verification',
    username: 'Username',
    password: 'Password',
    login: 'Log In',
    userRequired: 'Username is required',
    passwordRequired: 'Password is required',
    switchLanguage: 'Switch to Spanish'
  },
  es: {
    welcome: 'Bienvenido',
    subtitle: 'Tu plataforma confiable para verificación de wallets',
    username: 'Usuario',
    password: 'Contraseña',
    login: 'Iniciar Sesión',
    userRequired: 'Usuario es requerido',
    passwordRequired: 'Contraseña es requerida',
    switchLanguage: 'Cambiar a Inglés'
  }
};

function Login({ onLogin, language = 'es', onLanguageChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const t = translations[language];

  const handleLanguageToggle = () => {
    onLanguageChange(language === 'en' ? 'es' : 'en');
  };

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
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: 450 },
            p: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <Tooltip title={t.switchLanguage}>
              <IconButton 
                onClick={handleLanguageToggle}
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
          </Box>
          
          <img 
            src={logoAuraBlack} 
            alt="Aura Logo" 
            style={{ 
              width: '100%',
              maxWidth: 400,
              height: 'auto',
              marginBottom: '8%',
            }} 
          />
          
          <Typography 
            component="h1" 
            variant="h4" 
            sx={{ 
              mb: 2, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.125rem' }
            }}
          >
            {t.welcome}
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: 4, 
              textAlign: 'center', 
              color: 'text.secondary',
              px: { xs: 1, sm: 2 },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            {t.subtitle}
          </Typography>

          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              width: '100%',
              mt: { xs: 2, sm: 3 }
            }}
          >
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
              sx={{
                mb: { xs: 2, sm: 3 }
              }}
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
              sx={{
                mb: { xs: 2, sm: 3 }
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                mt: { xs: 2, sm: 3 },
                mb: { xs: 2, sm: 2 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
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