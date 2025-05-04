import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const ARBISCAN_LINK = 'https://arbiscan.io/';
const OFAC_LINK = 'https://sanctionssearch.ofac.treas.gov/';

export default function BlogPostScore() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              El Semáforo de AURA: ¿Qué Significan Realmente los Colores? (🟢🟡🔴)
            </Typography>
            <Typography paragraph>
              Una de las características clave de AURA es nuestro "Semáforo de Riesgo". Es una forma visual y rápida de entender el nivel de alerta asociado a una dirección de wallet que analizas. Pero, ¿qué hay detrás de cada color? ¡Te lo explicamos!
            </Typography>
            <Typography paragraph sx={{ fontStyle: 'italic' }}>
              (Importante: En esta versión prototipo del hackathon, el análisis se basa en reglas simples y listas de riesgo simuladas. La precisión mejorará significativamente en futuras versiones).
            </Typography>
            <Typography paragraph>
              <b>🟢 Verde (Riesgo Bajo):</b> ¡Luz verde! Cuando AURA muestra este color, significa que, basándonos en nuestro análisis básico actual, <b>no hemos encontrado indicadores directos</b> que vinculen esa dirección con nuestras listas de riesgo simuladas (ej. mezcladores conocidos, direcciones sancionadas de ejemplo) ni con patrones de actividad sospechosos muy evidentes. <b>Ojo:</b> Esto no es una garantía absoluta de seguridad, pero es una buena señal inicial. Siempre aplica tu propio juicio.
            </Typography>
            <Typography paragraph>
              <b>🟡 Amarillo (Riesgo Medio):</b> ¡Precaución! El amarillo indica que hemos detectado <b>algún factor que merece tu atención</b>. Podría ser una interacción indirecta con una dirección de riesgo, un patrón de transacciones algo inusual o alguna característica que, aunque no es directamente alarmante, justifica una revisión más detallada antes de interactuar. Investiga un poco más usando{' '}
              <Link href={ARBISCAN_LINK} target="_blank" rel="noopener noreferrer">
                exploradores de bloques como Arbiscan
              </Link>{' '}
              si ves este color.
            </Typography>
            <Typography paragraph>
              <b>🔴 Rojo (Riesgo Alto):</b> ¡Alerta Máxima! El rojo es una señal clara de <b>alto riesgo</b>. Esto generalmente significa que hemos encontrado una <b>conexión directa</b> de la dirección analizada con nuestras listas de alto riesgo (ej. interacción confirmada con un mezclador conocido o una dirección sancionada por autoridades como las de la{' '}
              <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
                lista OFAC
              </Link>
              ). Recomendamos <b>evitar interactuar</b> con direcciones que muestren este nivel de riesgo para proteger tus fondos y evitar complicaciones.
            </Typography>
            <Typography paragraph>
              <b>En resumen:</b> El semáforo de AURA es una herramienta de <span style={{ fontStyle: 'italic' }}>señalización</span>. Úsalo como un primer filtro importante en tu proceso de diligencia, pero siempre compleméntalo con buenas prácticas de seguridad y tu propia investigación si es necesario. ¡Queremos que operes con confianza!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 