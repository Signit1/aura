import { Container, Typography, Box, Card, CardContent, Link } from '@mui/material';

const BLOG_EVENT_LINK = 'https://ethcdm.com/';
const BLOG_DEMO_LINK = '/';

const content = {
  en: {
    title: 'Welcome to the AURA Blog! Navigating Web3 Safely Together',
    paragraphs: [
      'Hello and welcome to AURA\'s knowledge space! If you\'re here, you probably share our passion for the incredible potential of Web3 and cryptocurrencies, but also understand the importance of moving with caution in this new digital territory.',
      <>We are AURA (Unified Risk Analysis and Alerts), a project born at the{' '}
        <Link href={BLOG_EVENT_LINK} target="_blank" rel="noopener noreferrer">
          ETH Cinco de Mayo Hackathon
        </Link>{' '}
        with a very clear mission: <b>to make the blockchain ecosystem safer and more transparent for everyone.</b></>,
      'In this blog, we\'ll share valuable information, practical guides, and analysis to help you better understand the risks associated with crypto transactions, especially regarding Money Laundering (AML). We want to demystify complex concepts and give you tools to protect yourself.',
      'Here you\'ll find:\n- Explanations about how AURA works and how to interpret its results.\n- Practical security tips for your daily Web3 interactions.\n- Information about the most common risks and how to detect them.\n- Updates about AURA\'s development and our vision for the future (including AI!).',
      'We firmly believe that information is power, especially when it comes to protecting your digital assets.',
      <>Thank you for joining us on this journey! We invite you to{' '}
        <Link href={BLOG_DEMO_LINK} target="_blank" rel="noopener noreferrer">
          try the AURA demo
        </Link>{' '}
        and come back soon for more content.</>
    ]
  },
  es: {
    title: '¡Bienvenido al Blog de AURA! Navegando Seguro en Web3 Juntos',
    paragraphs: [
      '¡Hola y bienvenido/a al espacio de conocimiento de AURA! Si estás aquí, probablemente compartes nuestra pasión por el increíble potencial de Web3 y las criptomonedas, pero también entiendes la importancia de moverte con precaución en este nuevo territorio digital.',
      <>Somos AURA (Análisis Unificado de Riesgos y Alertas), un proyecto nacido en el{' '}
        <Link href={BLOG_EVENT_LINK} target="_blank" rel="noopener noreferrer">
          ETH Cinco de Mayo Hackathon
        </Link>{' '}
        con una misión muy clara: <b>hacer que el ecosistema blockchain sea más seguro y transparente para todos.</b></>,
      'En este blog, compartiremos información valiosa, guías prácticas y análisis para ayudarte a entender mejor los riesgos asociados con las transacciones cripto, especialmente en lo referente al Lavado de Dinero (AML). Queremos desmitificar conceptos complejos y darte herramientas para protegerte.',
      'Aquí encontrarás:\n- Explicaciones sobre cómo funciona AURA y cómo interpretar sus resultados.\n- Consejos prácticos de seguridad para tus interacciones diarias en Web3.\n- Información sobre los riesgos más comunes y cómo detectarlos.\n- Actualizaciones sobre el desarrollo de AURA y nuestra visión a futuro (¡incluyendo IA!).',
      'Creemos firmemente que la información es poder, especialmente cuando se trata de proteger tus activos digitales.',
      <>¡Gracias por unirte a nosotros en este viaje! Te invitamos a{' '}
        <Link href={BLOG_DEMO_LINK} target="_blank" rel="noopener noreferrer">
          probar la demo de AURA
        </Link>{' '}
        y a volver pronto por más contenido.</>
    ]
  }
};

export default function BlogPostWelcome({ language = 'es' }) {
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
              <Typography key={index} paragraph sx={index === 3 ? { whiteSpace: 'pre-line' } : {}}>
                {paragraph}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 