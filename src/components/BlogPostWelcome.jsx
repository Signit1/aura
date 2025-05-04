import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const BLOG_EVENT_LINK = 'https://ethcdm.com/';
const BLOG_DEMO_LINK = '/'; // Cambia por el link de tu demo

export default function BlogPostWelcome() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              ¡Bienvenido al Blog de AURA! Navegando Seguro en Web3 Juntos
            </Typography>
            <Typography paragraph>
              ¡Hola y bienvenido/a al espacio de conocimiento de AURA! Si estás aquí, probablemente compartes nuestra pasión por el increíble potencial de Web3 y las criptomonedas, pero también entiendes la importancia de moverte con precaución en este nuevo territorio digital.
            </Typography>
            <Typography paragraph>
              Somos AURA (Análisis Unificado de Riesgos y Alertas), un proyecto nacido en el{' '}
              <Link href={BLOG_EVENT_LINK} target="_blank" rel="noopener noreferrer">
                ETH Cinco de Mayo Hackathon
              </Link>{' '}
              con una misión muy clara: <b>hacer que el ecosistema blockchain sea más seguro y transparente para todos.</b>
            </Typography>
            <Typography paragraph>
              En este blog, compartiremos información valiosa, guías prácticas y análisis para ayudarte a entender mejor los riesgos asociados con las transacciones cripto, especialmente en lo referente al Lavado de Dinero (AML). Queremos desmitificar conceptos complejos y darte herramientas para protegerte.
            </Typography>
            <Typography paragraph sx={{ whiteSpace: 'pre-line' }}>
              Aquí encontrarás:
              {'\n'}- Explicaciones sobre cómo funciona AURA y cómo interpretar sus resultados.
              {'\n'}- Consejos prácticos de seguridad para tus interacciones diarias en Web3.
              {'\n'}- Información sobre los riesgos más comunes y cómo detectarlos.
              {'\n'}- Actualizaciones sobre el desarrollo de AURA y nuestra visión a futuro (¡incluyendo IA!).
            </Typography>
            <Typography paragraph>
              Creemos firmemente que la información es poder, especialmente cuando se trata de proteger tus activos digitales.
            </Typography>
            <Typography paragraph>
              ¡Gracias por unirte a nosotros en este viaje! Te invitamos a{' '}
              <Link href={BLOG_DEMO_LINK} target="_blank" rel="noopener noreferrer">
                probar la demo de AURA
              </Link>{' '}
              y a volver pronto por más contenido.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 