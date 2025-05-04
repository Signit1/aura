import { Container, List, ListItemButton, ListItemText, Typography, Box } from '@mui/material';

const blogPosts = [
  { title: '¡Bienvenido al Blog de AURA! Navegando Seguro en Web3 Juntos', key: 'welcome' },
  { title: 'El Semáforo de AURA: ¿Qué Significan Realmente los Colores? (🟢🟡🔴)', key: 'score' },
  { title: 'AML en Crypto: ¿Por Qué Debería Importarte (Aunque No Seas un Banco)?', key: 'aml' },
  { title: 'Definiciones y Acrónimos Clave en Web3 y AML', key: 'defs' }
];

export default function BlogList({ onPostClick }) {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Blog de AURA
        </Typography>
        <List>
          {blogPosts.map((post) => (
            <ListItemButton key={post.key} onClick={() => onPostClick ? onPostClick(post.key) : console.log('Clicked:', post.key)}>
              <ListItemText primary={post.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Container>
  );
} 