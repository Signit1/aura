import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';

const content = {
  en: {
    title: 'Key Features of AURA',
    features: [
      {
        icon: <SecurityIcon color="primary" />, 
        title: 'Advanced Security',
        desc: 'State-of-the-art verification system to ensure wallet safety.'
      },
      {
        icon: <SpeedIcon color="primary" />,
        title: 'Fast Verification',
        desc: 'Quick and efficient wallet analysis process.'
      },
      {
        icon: <VerifiedUserIcon color="primary" />,
        title: 'Reliable Results',
        desc: 'Accurate risk assessment based on multiple data sources.'
      },
      {
        icon: <LanguageIcon color="primary" />,
        title: 'Multilingual Support',
        desc: 'Available in multiple languages for global accessibility.'
      }
    ]
  },
  es: {
    title: 'Características Principales de AURA',
    features: [
      {
        icon: <SecurityIcon color="primary" />, 
        title: 'Seguridad Avanzada',
        desc: 'Sistema de verificación de última generación para garantizar la seguridad de las wallets.'
      },
      {
        icon: <SpeedIcon color="primary" />,
        title: 'Verificación Rápida',
        desc: 'Proceso de análisis de wallets rápido y eficiente.'
      },
      {
        icon: <VerifiedUserIcon color="primary" />,
        title: 'Resultados Confiables',
        desc: 'Evaluación de riesgo precisa basada en múltiples fuentes de datos.'
      },
      {
        icon: <LanguageIcon color="primary" />,
        title: 'Soporte Multilingüe',
        desc: 'Disponible en múltiples idiomas para accesibilidad global.'
      }
    ]
  }
};

export default function BlogPostFeatures({ language = 'es' }) {
  const t = content[language];
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {t.title}
            </Typography>
            <List>
              {t.features.map((f, idx) => (
                <Box key={idx}>
                  <ListItem>
                    <ListItemIcon>{f.icon}</ListItemIcon>
                    <ListItemText
                      primary={<b>{f.title}</b>}
                      secondary={f.desc}
                      primaryTypographyProps={{ align: 'justify' }}
                      secondaryTypographyProps={{ align: 'justify' }}
                    />
                  </ListItem>
                  {idx < t.features.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 