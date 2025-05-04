import { Container, List, ListItemButton, ListItemText, Typography, Box } from '@mui/material';

const blogPosts = {
  en: [
    { title: 'Welcome to the AURA Blog! Navigating Web3 Safely Together', key: 'welcome' },
    { title: 'The AURA Traffic Light: What Do the Colors Really Mean? (🟢🟡🔴)', key: 'score' },
    { title: 'AML in Crypto: Why Should You Care (Even If You\'re Not a Bank)?', key: 'aml' },
    { title: 'Key Definitions and Acronyms in Web3 and AML', key: 'defs' },
    { title: 'Key Features of AURA', key: 'features' },
    { title: 'How Does AURA Work?', key: 'howitworks' }
  ],
  es: [
    { title: '¡Bienvenido al Blog de AURA! Navegando Seguro en Web3 Juntos', key: 'welcome' },
    { title: 'El Semáforo de AURA: ¿Qué Significan Realmente los Colores? (🟢🟡🔴)', key: 'score' },
    { title: 'AML en Crypto: ¿Por Qué Debería Importarte (Aunque No Seas un Banco)?', key: 'aml' },
    { title: 'Definiciones y Acrónimos Clave en Web3 y AML', key: 'defs' },
    { title: 'Características Principales de AURA', key: 'features' },
    { title: '¿Cómo Funciona AURA?', key: 'howitworks' }
  ]
};

export default function BlogList({ onPostClick, language = 'es' }) {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box>
        <Typography variant="h5" gutterBottom>
          {language === 'es' ? 'Blog de AURA' : 'AURA Blog'}
        </Typography>
        <List>
          {blogPosts[language].map((post) => (
            <ListItemButton key={post.key} onClick={() => onPostClick ? onPostClick(post.key) : console.log('Clicked:', post.key)}>
              <ListItemText primary={post.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Container>
  );
} 