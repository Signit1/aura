import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';

const translations = {
  en: {
    title: 'About AURA',
    subtitle: 'Your Guardian in the Crypto World!',
    whatIsAura: {
      title: 'What is AURA?',
      text: 'Hello! We are AURA (Unified Risk Analysis and Alerts). We were born at the ETH Cinco de Mayo Hackathon with a clear mission: to make navigating the cryptocurrency world safer for everyone.',
      vision: 'Our Vision: We want to become an intelligent tool (yes, with AI in the future!) that proactively protects you against money laundering and scams in the blockchain ecosystem.',
      thanks: 'Thank you for trying AURA! Your security is our priority.'
    },
    mission: {
      title: 'Our Mission',
      text: 'We know that Web3 is exciting, but it can also be risky. Have you ever wondered if the wallet you\'re about to interact with has funds of dubious origin? That\'s where we come in!',
      whatWeDo: 'What do we do (in this prototype)? We analyze wallet addresses looking for connections with known risk activities (such as mixers or sanctioned addresses, using simulated data in this test version). We give you a simple and visual signal (our traffic light 🟢🟡🔴) to help you make more informed decisions before making a transaction.'
    },
    features: {
      title: 'Key Features',
      security: 'Advanced Security',
      securityDesc: 'State-of-the-art verification system to ensure wallet safety',
      speed: 'Fast Verification',
      speedDesc: 'Quick and efficient wallet analysis process',
      reliability: 'Reliable Results',
      reliabilityDesc: 'Accurate risk assessment based on multiple data sources',
      multilingual: 'Multilingual Support',
      multilingualDesc: 'Available in multiple languages for global accessibility'
    },
    howItWorks: {
      title: 'How It Works',
      step1: 'Connect your wallet',
      step2: 'Enter the address to verify',
      step3: 'Get instant risk assessment',
      step4: 'Make informed decisions'
    }
  },
  es: {
    title: 'Acerca de AURA',
    subtitle: '¡Tu Guardián en el Mundo Crypto!',
    whatIsAura: {
      title: '¿Qué es AURA?',
      text: '¡Hola! Somos AURA (Análisis Unificado de Riesgos y Alertas). Nacimos en el ETH Cinco de Mayo Hackathon con una misión clara: hacer que navegar por el mundo de las criptomonedas sea más seguro para todos.',
      vision: 'Nuestra Visión: Queremos convertirnos en una herramienta inteligente (¡sí, con IA en el futuro!) que te proteja de forma proactiva contra el lavado de dinero y las estafas en el ecosistema blockchain.',
      thanks: '¡Gracias por probar AURA! Tu seguridad es nuestra prioridad.'
    },
    mission: {
      title: 'Nuestra Misión',
      text: 'Sabemos que Web3 es emocionante, pero también puede ser riesgoso. ¿Alguna vez te has preguntado si la wallet con la que vas a interactuar tiene fondos de origen dudoso? ¡Ahí es donde entramos nosotros!',
      whatWeDo: '¿Qué hacemos (en este prototipo)? Analizamos direcciones de wallets buscando conexiones con actividades de riesgo conocidas (como mezcladores o direcciones sancionadas, usando datos simulados en esta versión de prueba). Te damos una señal simple y visual (nuestro semáforo 🟢🟡🔴) para ayudarte a tomar decisiones más informadas antes de hacer una transacción.'
    },
    features: {
      title: 'Características Principales',
      security: 'Seguridad Avanzada',
      securityDesc: 'Sistema de verificación de última generación para garantizar la seguridad de las wallets',
      speed: 'Verificación Rápida',
      speedDesc: 'Proceso de análisis de wallets rápido y eficiente',
      reliability: 'Resultados Confiables',
      reliabilityDesc: 'Evaluación de riesgo precisa basada en múltiples fuentes de datos',
      multilingual: 'Soporte Multilingüe',
      multilingualDesc: 'Disponible en múltiples idiomas para accesibilidad global'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      step1: 'Conecta tu wallet',
      step2: 'Ingresa la dirección a verificar',
      step3: 'Obtén una evaluación de riesgo instantánea',
      step4: 'Toma decisiones informadas'
    }
  }
};

function AboutAuraScreen({ language = 'es' }) {
  const t = translations[language];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {t.subtitle}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* What is AURA Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom align="center">
                {t.whatIsAura.title}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                align="justify"
                sx={{ 
                  textIndent: '2em',
                  lineHeight: 1.8
                }}
              >
                {t.whatIsAura.text}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                align="justify"
                sx={{ 
                  textIndent: '2em',
                  lineHeight: 1.8
                }}
              >
                {t.whatIsAura.vision}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                align="justify"
                sx={{ 
                  textIndent: '2em',
                  lineHeight: 1.8
                }}
              >
                {t.whatIsAura.thanks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom align="center">
                {t.mission.title}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                align="justify"
                sx={{ 
                  textIndent: '2em',
                  lineHeight: 1.8
                }}
              >
                {t.mission.text}
              </Typography>
              <Typography 
                variant="body1"
                align="justify"
                sx={{ 
                  textIndent: '2em',
                  lineHeight: 1.8
                }}
              >
                {t.mission.whatWeDo}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Features Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">
            {t.features.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <SecurityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t.features.security}
                        secondary={t.features.securityDesc}
                        primaryTypographyProps={{ align: 'justify' }}
                        secondaryTypographyProps={{ align: 'justify' }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <SpeedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t.features.speed}
                        secondary={t.features.speedDesc}
                        primaryTypographyProps={{ align: 'justify' }}
                        secondaryTypographyProps={{ align: 'justify' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <VerifiedUserIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t.features.reliability}
                        secondary={t.features.reliabilityDesc}
                        primaryTypographyProps={{ align: 'justify' }}
                        secondaryTypographyProps={{ align: 'justify' }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <LanguageIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t.features.multilingual}
                        secondary={t.features.multilingualDesc}
                        primaryTypographyProps={{ align: 'justify' }}
                        secondaryTypographyProps={{ align: 'justify' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* How It Works Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">
            {t.howItWorks.title}
          </Typography>
          <Card>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="1." 
                    secondary={t.howItWorks.step1}
                    secondaryTypographyProps={{ align: 'justify' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="2." 
                    secondary={t.howItWorks.step2}
                    secondaryTypographyProps={{ align: 'justify' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="3." 
                    secondary={t.howItWorks.step3}
                    secondaryTypographyProps={{ align: 'justify' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="4." 
                    secondary={t.howItWorks.step4}
                    secondaryTypographyProps={{ align: 'justify' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutAuraScreen; 