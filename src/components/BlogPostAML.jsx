import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const FATF_LINK = 'https://www.fatf-gafi.org/';
const ETHERSCAN_LINK = 'https://etherscan.io/';
const OFAC_LINK = 'https://sanctionssearch.ofac.treas.gov/';

export default function BlogPostAML() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              AML en Crypto: ¿Por Qué Debería Importarte (Aunque No Seas un Banco)?
            </Typography>
            <Typography paragraph>
              Puede que escuches "AML" (Anti-Lavado de Dinero) y pienses que es algo que solo concierne a grandes instituciones financieras. ¡Pero en el mundo cripto, nos afecta a todos! Entender por qué es crucial para navegar seguro.
            </Typography>
            <Typography paragraph>
              <b>¿Qué es AML, en simple?</b> Son las reglas y procesos diseñados para prevenir que el dinero obtenido ilegalmente (drogas, estafas, terrorismo, etc.) se "limpie" haciéndolo pasar por fondos legítimos. Puedes aprender más sobre los estándares internacionales en la web del{' '}
              <Link href={FATF_LINK} target="_blank" rel="noopener noreferrer">
                GAFI/FATF
              </Link>
              .
            </Typography>
            <Typography paragraph>
              <b>¿Por qué es relevante en Crypto?</b> La naturaleza seudónima y global de las criptomonedas, aunque innovadora, puede ser atractiva para actores maliciosos que buscan mover fondos ilícitos. Aunque las transacciones son públicas en la blockchain (
              <Link href={ETHERSCAN_LINK} target="_blank" rel="noopener noreferrer">
                ¡la transparencia es clave!
              </Link>
              ), identificar el origen real puede ser complejo.
            </Typography>
            <Typography paragraph sx={{ whiteSpace: 'pre-line' }}>
              <b>¿Cómo te afecta a TI como usuario?</b>
              {'\n'}- <b>Riesgo de Contagio:</b> Si recibes fondos que provienen de actividades ilícitas (aunque no lo sepas), tus propios fondos podrían ser "marcados" o congelados si intentas depositarlos en un exchange centralizado que aplique controles AML estrictos.
              {'\n'}- <b>Pérdida de Acceso:</b> Los exchanges pueden bloquear tu cuenta o fondos si detectan conexiones sospechosas.
              {'\n'}- <b>Ser Víctima Indirecta:</b> Puedes interactuar con un protocolo DeFi que haya sido financiado con dinero robado, exponiéndote a riesgos si el protocolo es intervenido o sus fondos son congelados.
              {'\n'}- <b>Complicaciones Legales:</b> Aunque menos común para usuarios pequeños, recibir fondos de fuentes sancionadas (como las de la{' '}
              <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
                lista OFAC
              </Link>
              ) puede tener implicaciones.
            </Typography>
            <Typography paragraph>
              <b>¿Cómo ayuda AURA?</b> Nuestra herramienta está diseñada para ser tu primera línea de defensa. Al analizar una dirección ANTES de interactuar con ella, AURA te ayuda a identificar posibles conexiones con direcciones de alto riesgo conocidas, reduciendo la probabilidad de que te veas involucrado/a, sin saberlo, con fondos de origen dudoso.
            </Typography>
            <Typography paragraph>
              ¡Estar informado y usar herramientas como AURA no es paranoia, es inteligencia financiera en la era Web3!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 