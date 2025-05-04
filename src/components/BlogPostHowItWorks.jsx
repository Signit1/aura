import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

const content = {
  en: {
    title: 'How Does AURA Work?',
    steps: [
      'Connect your wallet',
      'Enter the address to verify',
      'Get instant risk assessment',
      'Make informed decisions'
    ]
  },
  es: {
    title: '¿Cómo Funciona AURA?',
    steps: [
      'Conecta tu wallet',
      'Ingresa la dirección a verificar',
      'Obtén una evaluación de riesgo instantánea',
      'Toma decisiones informadas'
    ]
  }
};

export default function BlogPostHowItWorks({ language = 'es' }) {
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
              {t.steps.map((step, idx) => (
                <Box key={idx}>
                  <ListItem>
                    <ListItemText
                      primary={`${idx + 1}.`}
                      secondary={step}
                      secondaryTypographyProps={{ align: 'justify' }}
                    />
                  </ListItem>
                  {idx < t.steps.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 