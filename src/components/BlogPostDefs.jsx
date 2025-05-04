import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const definitions = [
  {
    term: 'Web3',
    def: 'La nueva generación de internet basada en tecnologías descentralizadas como blockchain, que permite a los usuarios interactuar, poseer y transferir valor sin intermediarios.'
  },
  {
    term: 'Blockchain',
    def: 'Base de datos distribuida e inmutable que almacena información en bloques enlazados y asegurados mediante criptografía.'
  },
  {
    term: 'Wallet (Billetera)',
    def: 'Aplicación o dispositivo que permite almacenar, enviar y recibir criptomonedas o activos digitales.'
  },
  {
    term: 'AML (Anti-Money Laundering)',
    def: 'Conjunto de leyes, regulaciones y procedimientos para prevenir el lavado de dinero y el financiamiento de actividades ilícitas.'
  },
  {
    term: 'KYC (Know Your Customer)',
    def: 'Proceso de verificación de identidad de los clientes, requerido por instituciones financieras y plataformas cripto para cumplir con regulaciones AML.'
  },
  {
    term: 'OFAC',
    def: 'Office of Foreign Assets Control, agencia del Departamento del Tesoro de EE.UU. que administra y hace cumplir sanciones económicas y comerciales.'
  },
  {
    term: 'Dirección sancionada',
    def: 'Dirección de wallet incluida en listas negras por estar vinculada a actividades ilícitas o sancionadas por autoridades.'
  },
  {
    term: 'Mezclador (Mixer)',
    def: 'Servicio que mezcla criptomonedas de diferentes usuarios para dificultar el rastreo del origen de los fondos.'
  },
  {
    term: 'Smart Contract',
    def: 'Programa autoejecutable en la blockchain que ejecuta acciones automáticamente cuando se cumplen ciertas condiciones.'
  },
  {
    term: 'DeFi (Finanzas Descentralizadas)',
    def: 'Ecosistema de aplicaciones financieras construidas sobre blockchain que operan sin intermediarios tradicionales.'
  },
  {
    term: 'CEX / DEX',
    def: 'CEX: Exchange centralizado (ej. Binance). DEX: Exchange descentralizado (ej. Uniswap).' 
  },
  {
    term: 'Token',
    def: 'Unidad de valor digital emitida en una blockchain, puede representar criptomonedas, derechos, activos, etc.'
  },
  {
    term: 'Hash',
    def: 'Cadena alfanumérica generada por una función criptográfica, usada para identificar bloques, transacciones o datos.'
  },
  {
    term: 'Gas',
    def: 'Unidad que mide el costo computacional de ejecutar operaciones en la blockchain (especialmente en Ethereum).'
  },
  {
    term: 'DAO (Decentralized Autonomous Organization)',
    def: 'Organización gestionada por reglas codificadas en smart contracts, sin una autoridad central.'
  },
  {
    term: 'NFT (Non-Fungible Token)',
    def: 'Activo digital único e irrepetible registrado en una blockchain.'
  },
  {
    term: 'Seed Phrase (Frase Semilla)',
    def: 'Conjunto de palabras que permite recuperar el acceso a una wallet. Debe mantenerse en secreto y segura.'
  },
  {
    term: 'Riesgo de Contagio',
    def: 'Riesgo de que fondos legítimos se vean afectados por haber estado en contacto con fondos ilícitos.'
  },
  {
    term: 'Lista Negra (Blacklist)',
    def: 'Listado de direcciones, entidades o personas prohibidas o restringidas por estar asociadas a actividades ilícitas.'
  },
  {
    term: 'Lista OFAC',
    def: 'Lista de personas, entidades y direcciones sancionadas por la OFAC.'
  }
];

export default function BlogPostDefs() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Definiciones y Acrónimos Clave en Web3 y AML
            </Typography>
            <List>
              {definitions.map((item, idx) => (
                <ListItem key={idx} alignItems="flex-start" sx={{ pb: 0 }}>
                  <ListItemText
                    primary={<b>{item.term}</b>}
                    secondary={item.def}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
} 