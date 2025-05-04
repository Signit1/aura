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
    title: 'What is AURA?',
    subtitle: 'Your Guardian in the Crypto World!',
    aboutAuraParagraphs: [
      `Hello! We are AURA (Unified Risk Analysis and Alerts). We were born at the ETH Cinco de Mayo Hackathon with a clear mission: to make navigating the world of cryptocurrencies safer for everyone.`,
      `We know Web3 is exciting, but it can also be risky. Have you ever wondered if the wallet you're about to interact with has dubious funds or is linked to illicit activities? That's where we come in!`,
      `What do we do (in this prototype)?`,
      `Deep Analysis: We review the address you provide, searching for connections to risky activities. This includes checking against reference lists that simulate addresses blocked or sanctioned by authorities.`,
      `Activity Evaluation: We don't just look at lists; we also consider basic account interaction patterns that could indicate suspicious behavior.`,
      `Clear Signal: We combine these factors to generate our risk traffic light (🟢🟡🔴). A simple visual signal that tells you if the detected risk is Low, Medium, or High, helping you make more informed decisions before interacting.`,
      `(In this hackathon test version, the lists and activity analysis are simplified/simulated).`,
      `Our Mission: To empower users and platforms with intelligent and accessible tools to detect and prevent money laundering and illicit activities on the blockchain, fostering a safer and more trustworthy digital ecosystem.`,
      `Our Vision: To be the leading AML intelligence solution for Web3, combining the power of blockchain analysis with artificial intelligence to provide proactive protection and real-time alerts on a global scale. This prototype is just the beginning!`,
      `Thank you for trying AURA! Your security is our priority.`
    ],
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
    title: '¿Qué es AURA?',
    subtitle: '¡Tu Guardián en el Mundo Crypto!',
    aboutAuraParagraphs: [
      `¡Hola! Somos AURA (Análisis Unificado de Riesgos y Alertas). Nacimos en el ETH Cinco de Mayo Hackathon con una misión clara: hacer que navegar por el mundo de las criptomonedas sea más seguro para todos.`,
      `Sabemos que Web3 es emocionante, pero también puede ser riesgoso. ¿Alguna vez te has preguntado si la wallet con la que vas a interactuar tiene fondos de origen dudoso o está vinculada a actividades ilícitas? ¡Ahí es donde entramos nosotros!`,
      `¿Qué hacemos (en este prototipo)?`,
      `Analizamos a Fondo: Revisamos la dirección que nos das buscando conexiones con actividades de riesgo. Esto incluye la consulta contra listas de referencia que simulan direcciones bloqueadas o sancionadas por autoridades.`,
      `Evaluamos la Actividad: No solo miramos listas, también consideramos patrones básicos de interacción de la cuenta que podrían indicar un comportamiento sospechoso.`,
      `Te Damos una Señal Clara: Combinamos estos factores para generar nuestro semáforo de riesgo (🟢🟡🔴). Una señal visual simple que te indica si el riesgo detectado es Bajo, Medio o Alto, ayudándote a decidir con más información antes de interactuar.`,
      `(En esta versión de prueba del hackathon, las listas y el análisis de actividad son simplificados/simulados).`,
      `Nuestra Misión: Empoderar a usuarios y plataformas con herramientas inteligentes y accesibles para detectar y prevenir el lavado de dinero y actividades ilícitas en la blockchain, fomentando un ecosistema digital más seguro y confiable.`,
      `Nuestra Visión: Ser la solución líder de inteligencia AML para Web3, combinando el poder del análisis blockchain con la inteligencia artificial para ofrecer protección proactiva y alertas en tiempo real a escala global. ¡Este prototipo es solo el comienzo!`,
      `¡Gracias por probar AURA! Tu seguridad es nuestra prioridad.`
    ],
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

  // Estructura de los bloques para ES y EN
  let blocks = [];
  if (language === 'es') {
    blocks = [
      // Primer bloque: primeros dos párrafos
      [t.aboutAuraParagraphs[0], t.aboutAuraParagraphs[1]],
      // Segundo bloque: desde '¿Qué hacemos...' hasta antes de 'Nuestra Misión'
      [t.aboutAuraParagraphs[2], t.aboutAuraParagraphs[3], t.aboutAuraParagraphs[4], t.aboutAuraParagraphs[5], t.aboutAuraParagraphs[6]],
      // Tercer bloque: Misión
      [t.aboutAuraParagraphs[7]],
      // Cuarto bloque: Visión
      [t.aboutAuraParagraphs[8]],
      // Quinto bloque: Agradecimiento
      [t.aboutAuraParagraphs[9]]
    ];
  } else if (language === 'en') {
    blocks = [
      [t.aboutAuraParagraphs[0], t.aboutAuraParagraphs[1]],
      [t.aboutAuraParagraphs[2], t.aboutAuraParagraphs[3], t.aboutAuraParagraphs[4], t.aboutAuraParagraphs[5], t.aboutAuraParagraphs[6]],
      [t.aboutAuraParagraphs[7]],
      [t.aboutAuraParagraphs[8]],
      [t.aboutAuraParagraphs[9]]
    ];
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t.title}
        </Typography>
        {t.subtitle && (
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: -2, mb: 2 }}>
            {t.subtitle}
          </Typography>
        )}
      </Box>

      <Grid container spacing={4}>
        {/* Bloques principales de información */}
        {blocks.map((block, i) => (
          <Grid item xs={12} key={i}>
            <Card sx={{ boxShadow: 3, background: '#f8fafc' }}>
              <CardContent>
                {block.map((paragraph, j) => (
                  <Typography
                    key={j}
                    variant="body1"
                    paragraph
                    align="justify"
                    sx={{ textIndent: '2em', lineHeight: 1.8 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}

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