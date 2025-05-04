import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const ARBISCAN_LINK = 'https://arbiscan.io/';
const OFAC_LINK = 'https://sanctionssearch.ofac.treas.gov/';

const content = {
  en: {
    title: 'The AURA Traffic Light: What Do the Colors Really Mean? (🟢🟡🔴)',
    paragraphs: [
      'One of AURA\'s key features is our "Risk Traffic Light". It\'s a visual and quick way to understand the alert level associated with a wallet address you\'re analyzing. But what\'s behind each color? Let us explain!',
      '(Important: In this hackathon prototype version, the analysis is based on simple rules and simulated risk lists. Accuracy will improve significantly in future versions).',
      <>🟢 <b>Green (Low Risk):</b> Green light! When AURA shows this color, it means that, based on our current basic analysis, <b>we haven\'t found direct indicators</b> linking that address to our simulated risk lists (e.g., known mixers, example sanctioned addresses) or to very obvious suspicious activity patterns. <b>Note:</b> This is not an absolute guarantee of safety, but it\'s a good initial sign. Always apply your own judgment.</>,
      <>🟡 <b>Yellow (Medium Risk):</b> Caution! Yellow indicates that we\'ve detected <b>some factor that deserves your attention</b>. It could be an indirect interaction with a risk address, an unusual transaction pattern, or some characteristic that, while not directly alarming, justifies a more detailed review before interacting. Investigate further using{' '}
        <Link href={ARBISCAN_LINK} target="_blank" rel="noopener noreferrer">
          block explorers like Arbiscan
        </Link>{' '}
        if you see this color.</>,
      <>🔴 <b>Red (High Risk):</b> Maximum Alert! Red is a clear signal of <b>high risk</b>. This generally means we\'ve found a <b>direct connection</b> of the analyzed address with our high-risk lists (e.g., confirmed interaction with a known mixer or an address sanctioned by authorities like those on the{' '}
        <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
          OFAC list
        </Link>
        ). We recommend <b>avoiding interaction</b> with addresses showing this risk level to protect your funds and avoid complications.</>,
      <>In summary: AURA\'s traffic light is a <span style={{ fontStyle: 'italic' }}>signaling</span> tool. Use it as an important first filter in your due diligence process, but always complement it with good security practices and your own research if needed. We want you to operate with confidence!</>
    ]
  },
  es: {
    title: 'El Semáforo de AURA: ¿Qué Significan Realmente los Colores? (🟢🟡🔴)',
    paragraphs: [
      'Una de las características clave de AURA es nuestro "Semáforo de Riesgo". Es una forma visual y rápida de entender el nivel de alerta asociado a una dirección de wallet que analizas. Pero, ¿qué hay detrás de cada color? ¡Te lo explicamos!',
      '(Importante: En esta versión prototipo del hackathon, el análisis se basa en reglas simples y listas de riesgo simuladas. La precisión mejorará significativamente en futuras versiones).',
      <>🟢 <b>Verde (Riesgo Bajo):</b> ¡Luz verde! Cuando AURA muestra este color, significa que, basándonos en nuestro análisis básico actual, <b>no hemos encontrado indicadores directos</b> que vinculen esa dirección con nuestras listas de riesgo simuladas (ej. mezcladores conocidos, direcciones sancionadas de ejemplo) ni con patrones de actividad sospechosos muy evidentes. <b>Ojo:</b> Esto no es una garantía absoluta de seguridad, pero es una buena señal inicial. Siempre aplica tu propio juicio.</>,
      <>🟡 <b>Amarillo (Riesgo Medio):</b> ¡Precaución! El amarillo indica que hemos detectado <b>algún factor que merece tu atención</b>. Podría ser una interacción indirecta con una dirección de riesgo, un patrón de transacciones algo inusual o alguna característica que, aunque no es directamente alarmante, justifica una revisión más detallada antes de interactuar. Investiga un poco más usando{' '}
        <Link href={ARBISCAN_LINK} target="_blank" rel="noopener noreferrer">
          exploradores de bloques como Arbiscan
        </Link>{' '}
        si ves este color.</>,
      <>🔴 <b>Rojo (Riesgo Alto):</b> ¡Alerta Máxima! El rojo es una señal clara de <b>alto riesgo</b>. Esto generalmente significa que hemos encontrado una <b>conexión directa</b> de la dirección analizada con nuestras listas de alto riesgo (ej. interacción confirmada con un mezclador conocido o una dirección sancionada por autoridades como las de la{' '}
        <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
          lista OFAC
        </Link>
        ). Recomendamos <b>evitar interactuar</b> con direcciones que muestren este nivel de riesgo para proteger tus fondos y evitar complicaciones.</>,
      <>En resumen: El semáforo de AURA es una herramienta de <span style={{ fontStyle: 'italic' }}>señalización</span>. Úsalo como un primer filtro importante en tu proceso de diligencia, pero siempre compleméntalo con buenas prácticas de seguridad y tu propia investigación si es necesario. ¡Queremos que operes con confianza!</>
    ]
  }
};

export default function BlogPostScore({ language = 'es' }) {
  const t = content[language];
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {t.title}
            </Typography>
            {t.paragraphs.map((paragraph, index) => (
              <Typography 
                key={index} 
                paragraph 
                sx={index === 1 ? { fontStyle: 'italic' } : {}}
              >
                {paragraph}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 