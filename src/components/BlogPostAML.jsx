import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const FATF_LINK = 'https://www.fatf-gafi.org/';
const ETHERSCAN_LINK = 'https://etherscan.io/';
const OFAC_LINK = 'https://sanctionssearch.ofac.treas.gov/';

const content = {
  en: {
    title: 'AML in Crypto: Why Should You Care (Even If You\'re Not a Bank)?',
    paragraphs: [
      'You might hear "AML" (Anti-Money Laundering) and think it\'s something that only concerns large financial institutions. But in the crypto world, it affects us all! Understanding why is crucial for safe navigation.',
      <>What is AML, in simple terms? It\'s the set of rules and processes designed to prevent illegally obtained money (from drugs, scams, terrorism, etc.) from being "cleaned" by making it appear as legitimate funds. You can learn more about international standards on the{' '}
        <Link href={FATF_LINK} target="_blank" rel="noopener noreferrer">
          FATF/GAFI
        </Link>
        {' '}website.</>,
      <>Why is it relevant in Crypto? The pseudonymous and global nature of cryptocurrencies, while innovative, can be attractive to malicious actors seeking to move illicit funds. Although transactions are public on the blockchain (
        <Link href={ETHERSCAN_LINK} target="_blank" rel="noopener noreferrer">
          transparency is key!
        </Link>
        ), identifying the real origin can be complex.</>,
      <>How does it affect YOU as a user?\n- <b>Contagion Risk:</b> If you receive funds that come from illicit activities (even unknowingly), your own funds could be "marked" or frozen if you try to deposit them in a centralized exchange that applies strict AML controls.\n- <b>Loss of Access:</b> Exchanges can block your account or funds if they detect suspicious connections.\n- <b>Being an Indirect Victim:</b> You might interact with a DeFi protocol that has been funded with stolen money, exposing you to risks if the protocol is intervened or its funds are frozen.\n- <b>Legal Complications:</b> Although less common for small users, receiving funds from sanctioned sources (like those on the{' '}
        <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
          OFAC list
        </Link>
        ) can have implications.</>,
      'How does AURA help? Our tool is designed to be your first line of defense. By analyzing an address BEFORE interacting with it, AURA helps you identify possible connections with known high-risk addresses, reducing the likelihood of unknowingly getting involved with funds of dubious origin.',
      'Being informed and using tools like AURA isn\'t paranoia, it\'s financial intelligence in the Web3 era!'
    ]
  },
  es: {
    title: 'AML en Crypto: ¿Por Qué Debería Importarte (Aunque No Seas un Banco)?',
    paragraphs: [
      'Puede que escuches "AML" (Anti-Lavado de Dinero) y pienses que es algo que solo concierne a grandes instituciones financieras. ¡Pero en el mundo cripto, nos afecta a todos! Entender por qué es crucial para navegar seguro.',
      <>¿Qué es AML, en simple? Son las reglas y procesos diseñados para prevenir que el dinero obtenido ilegalmente (drogas, estafas, terrorismo, etc.) se "limpie" haciéndolo pasar por fondos legítimos. Puedes aprender más sobre los estándares internacionales en la web del{' '}
        <Link href={FATF_LINK} target="_blank" rel="noopener noreferrer">
          GAFI/FATF
        </Link>
        .</>,
      <>¿Por qué es relevante en Crypto? La naturaleza seudónima y global de las criptomonedas, aunque innovadora, puede ser atractiva para actores maliciosos que buscan mover fondos ilícitos. Aunque las transacciones son públicas en la blockchain (
        <Link href={ETHERSCAN_LINK} target="_blank" rel="noopener noreferrer">
          ¡la transparencia es clave!
        </Link>
        ), identificar el origen real puede ser complejo.</>,
      <>¿Cómo te afecta a TI como usuario?\n- <b>Riesgo de Contagio:</b> Si recibes fondos que provienen de actividades ilícitas (aunque no lo sepas), tus propios fondos podrían ser "marcados" o congelados si intentas depositarlos en un exchange centralizado que aplique controles AML estrictos.\n- <b>Pérdida de Acceso:</b> Los exchanges pueden bloquear tu cuenta o fondos si detectan conexiones sospechosas.\n- <b>Ser Víctima Indirecta:</b> Puedes interactuar con un protocolo DeFi que haya sido financiado con dinero robado, exponiéndote a riesgos si el protocolo es intervenido o sus fondos son congelados.\n- <b>Complicaciones Legales:</b> Aunque menos común para usuarios pequeños, recibir fondos de fuentes sancionadas (como las de la{' '}
        <Link href={OFAC_LINK} target="_blank" rel="noopener noreferrer">
          lista OFAC
        </Link>
        ) puede tener implicaciones.</>,
      '¿Cómo ayuda AURA? Nuestra herramienta está diseñada para ser tu primera línea de defensa. Al analizar una dirección ANTES de interactuar con ella, AURA te ayuda a identificar posibles conexiones con direcciones de alto riesgo conocidas, reduciendo la probabilidad de que te veas involucrado/a, sin saberlo, con fondos de origen dudoso.',
      '¡Estar informado y usar herramientas como AURA no es paranoia, es inteligencia financiera en la era Web3!'
    ]
  }
};

export default function BlogPostAML({ language = 'es' }) {
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
                sx={index === 3 ? { whiteSpace: 'pre-line' } : {}}
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