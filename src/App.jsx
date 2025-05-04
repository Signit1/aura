import { Container, Typography, Button, Box, TextField, Modal, Alert, IconButton } from '@mui/material';
import { Favorite, Close } from '@mui/icons-material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ResponsiveAppBar from './components/NavBar';
import Login from './components/Login';
import SubscriptionScreen from './components/SubscriptionScreen';
import AboutAuraScreen from './components/AboutAuraScreen';
import { useState } from 'react';
import blackList from '../blackList.json';
import altoRiesgo from '../AltoRiesgo.json';
import medioRiesgo from '../Medio_Riesgo.json';
import logoAura from './assets/logoAura.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import BlogList from './components/BlogList';
import BlogPostWelcome from './components/BlogPostWelcome';
import BlogPostScore from './components/BlogPostScore';
import BlogPostAML from './components/BlogPostAML';
import BlogPostDefs from './components/BlogPostDefs';
import BlogPostFeatures from './components/BlogPostFeatures';
import BlogPostHowItWorks from './components/BlogPostHowItWorks';

const translations = {
  en: {
    connect: 'Connect Wallet',
    connected: 'Wallet Connected',
    disconnect: 'Disconnect Wallet',
    addressToAnalyze: 'Address to Analyze',
    verify: 'Verify Wallet Address',
    blacklist: 'The wallet address is in the black list.',
    notBlacklist: 'The wallet address is not in the black list.',
    high: 'This address is in the HIGH RISK list.',
    highBlack: 'This address is in the BLACKLIST and is considered HIGH RISK.',
    highOfac: 'This address is in the OFAC list, is in the BLACKLIST, and is considered HIGH RISK.',
    medium: 'This address is in the MEDIUM RISK list.',
    low: 'This address is not in any risk list and is considered LOW RISK.',
    walletAddress: 'Wallet Address',
    verificationResult: 'Verification Result',
    close: 'Close'
  },
  es: {
    connect: 'Conectar Wallet',
    connected: 'Wallet Conectada',
    disconnect: 'Desconectar Wallet',
    addressToAnalyze: 'Dirección a Analizar',
    verify: 'Verificar Dirección de Wallet',
    blacklist: 'La dirección está en la lista negra.',
    notBlacklist: 'La dirección no está en la lista negra.',
    high: 'Esta dirección está en la lista de ALTO RIESGO.',
    highBlack: 'Esta dirección está en la LISTA NEGRA y es de ALTO RIESGO.',
    highOfac: 'Esta dirección está en la LISTA OFAC, está en la LISTA NEGRA y es de ALTO RIESGO.',
    medium: 'Esta dirección está en la lista de MEDIO RIESGO.',
    low: 'Esta dirección no está en ninguna lista y es de BAJO RIESGO.',
    walletAddress: 'Dirección de Wallet',
    verificationResult: 'Resultado de Verificación',
    close: 'Cerrar'
  }
};

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isBlacklisted, setIsBlacklisted] = useState(false);
  const [riskLevel, setRiskLevel] = useState('');
  const [connectedAccount, setConnectedAccount] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [currentScreen, setCurrentScreen] = useState('main');
  const [isOfac, setIsOfac] = useState(false);
  const [consultedAddresses, setConsultedAddresses] = useState([]);
  const [currentBlogPost, setCurrentBlogPost] = useState(null);

  const handleSubmit = () => {
    const isInBlacklist = blackList.blacklistedAddresses.includes(walletAddress);
    const isInHighRisk = altoRiesgo.highRiskAddresses.includes(walletAddress);
    const isInMediumRisk = medioRiesgo.mediumRiskAddresses.includes(walletAddress);
    const isInOfac = altoRiesgo.ofacAddresses && altoRiesgo.ofacAddresses.includes(walletAddress);

    setIsBlacklisted(isInBlacklist || isInOfac);
    setIsOfac(isInOfac);
    
    let risk = 'low';
    if (isInBlacklist || isInHighRisk || isInOfac) {
      risk = 'high';
      setRiskLevel('high');
    } else if (isInMediumRisk) {
      risk = 'medium';
      setRiskLevel('medium');
    } else {
      setRiskLevel('low');
    }

    let statusMsg = '';
    if (risk === 'high' && isInOfac) {
      statusMsg = translations[language].highOfac;
    } else if (risk === 'high' && (isInBlacklist || isInHighRisk)) {
      statusMsg = isInBlacklist ? translations[language].highBlack : translations[language].high;
    } else if (risk === 'medium') {
      statusMsg = translations[language].medium;
    } else {
      statusMsg = translations[language].low;
    }

    setConsultedAddresses(prev => [
      {
        address: walletAddress,
        risk,
        statusMsg,
        color: risk === 'high' ? '#ff0000' : risk === 'medium' ? '#ffa500' : '#4caf50'
      },
      ...prev
    ]);

    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getRiskMessage = () => {
    switch (riskLevel) {
      case 'high':
        return isBlacklisted 
          ? 'This address is in the BLACKLIST and is considered HIGH RISK.' 
          : 'This address is in the HIGH RISK list.';
      case 'medium':
        return 'This address is in the MEDIUM RISK list.';
      case 'low':
        return 'This address is not in any risk list and is considered LOW RISK.';
      default:
        return 'This address is not in any risk list and is considered LOW RISK.';
    }
  };

  const getRiskColor = () => {
    switch (riskLevel) {
      case 'high':
        return '#ff0000'; // Red
      case 'medium':
        return '#ffa500'; // Orange
      case 'low':
        return '#4caf50'; // Softer green
      default:
        return '#4caf50'; // Softer green for low risk
    }
  };

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setConnectedAccount(accounts[0]);
          setIsWalletConnected(true);
        }
      } catch (error) {
        console.error('User rejected connection or error:', error);
      }
    } else {
      alert('MetaMask no está instalado.');
    }
  };

  const shortenAddress = (address) => {
    if (!address) return '';
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
    setCurrentScreen('main');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    // Limpiar también el estado de la wallet al cerrar sesión
    setConnectedAccount('');
    setIsWalletConnected(false);
    setWalletAddress('');
  };

  const handleNavigate = (screen) => {
    if (screen === 'blog') {
      setCurrentBlogPost(null);
    }
    setCurrentScreen(screen);
  };

  // Blog post selection handler
  const handleBlogPostClick = (key) => {
    setCurrentBlogPost(key);
  };

  // PDF generation handler
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(language === 'es' ? 'Reporte de Direcciones Consultadas' : 'Consulted Addresses Report', 10, 15);
    doc.setFontSize(12);
    let y = 30;
    consultedAddresses.forEach((item, idx) => {
      doc.text(`${idx + 1}. ${item.address}`, 10, y);
      y += 7;
      doc.text((language === 'es' ? 'Estatus: ' : 'Status: ') + item.statusMsg, 15, y);
      y += 7;
      doc.text((language === 'es' ? 'Riesgo: ' : 'Risk: ') + (item.risk === 'high' ? (language === 'es' ? 'Alto' : 'High') : item.risk === 'medium' ? (language === 'es' ? 'Medio' : 'Medium') : (language === 'es' ? 'Bajo' : 'Low')), 15, y);
      y += 10;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });
    doc.save('wallet_report.pdf');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} language={language} onLanguageChange={setLanguage} />;
  }

  const renderMainContent = () => {
    switch (currentScreen) {
      case 'subscription':
        return <SubscriptionScreen language={language} />;
      case 'about':
        return <AboutAuraScreen language={language} />;
      case 'blog':
        if (currentBlogPost === 'welcome') return <BlogPostWelcome language={language} />;
        if (currentBlogPost === 'score') return <BlogPostScore language={language} />;
        if (currentBlogPost === 'aml') return <BlogPostAML language={language} />;
        if (currentBlogPost === 'defs') return <BlogPostDefs language={language} />;
        if (currentBlogPost === 'features') return <BlogPostFeatures language={language} />;
        if (currentBlogPost === 'howitworks') return <BlogPostHowItWorks language={language} />;
        return <BlogList onPostClick={handleBlogPostClick} language={language} />;
      case 'main':
      default:
        return (
          <Container maxWidth="sm">
            <Box
              sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}
            >
              {/* <img src={logoAura} alt="Aura Logo" style={{ width: 200, marginBottom: 24 }} /> */}
              <Button
                variant="contained"
                color={isWalletConnected ? 'success' : 'primary'}
                sx={{ mb: 2 }}
                onClick={handleConnectWallet}
                disabled={isWalletConnected}
                startIcon={<AccountBalanceWalletIcon />}
              >
                {isWalletConnected ? translations[language].connected : translations[language].connect}
              </Button>
              {isWalletConnected && (
                <>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {shortenAddress(connectedAccount)}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ mb: 2 }}
                    onClick={() => {
                      setConnectedAccount('');
                      setIsWalletConnected(false);
                    }}
                  >
                    {translations[language].disconnect}
                  </Button>
                </>
              )}
              <Box sx={{ width: '100%', mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {translations[language].addressToAnalyze}
                </Typography>
                <TextField
                  fullWidth
                  label={translations[language].walletAddress}
                  variant="outlined"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="0x..."
                  sx={{ mb: 2 }}
                  disabled={!isWalletConnected}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                  size="large"
                  disabled={!isWalletConnected || !walletAddress}
                >
                  {translations[language].verify}
                </Button>
                {consultedAddresses.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      {language === 'es' ? 'Direcciones consultadas:' : 'Consulted addresses:'}
                    </Typography>
                    <List dense>
                      {consultedAddresses.map((item, idx) => (
                        <ListItem key={item.address + idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <ListItemText
                            primary={item.address}
                            secondary={item.statusMsg}
                            primaryTypographyProps={{ style: { fontWeight: 500 } }}
                          />
                          <Chip
                            label={
                              item.risk === 'high'
                                ? (language === 'es' ? 'Alto' : 'High')
                                : item.risk === 'medium'
                                  ? (language === 'es' ? 'Medio' : 'Medium')
                                  : (language === 'es' ? 'Bajo' : 'Low')
                            }
                            sx={{ backgroundColor: item.color, color: 'white', fontWeight: 'bold' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<PictureAsPdfIcon />}
                      sx={{ mt: 2 }}
                      onClick={handleGeneratePDF}
                    >
                      {language === 'es' ? 'Generar PDF' : 'Generate PDF'}
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Container>
        );
    }
  };

  return (
    <>
      <ResponsiveAppBar 
        onLanguageChange={setLanguage} 
        language={language}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
      />
      {renderMainContent()}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="verification-result-modal"
        aria-describedby="verification-result-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{ color: 'text.secondary' }}
            >
              <Close />
            </IconButton>
          </Box>
          <Typography id="verification-result-modal" variant="h6" component="h2" sx={{ mb: 2 }}>
            {translations[language].verificationResult}
          </Typography>
          <Alert severity={isBlacklisted ? "error" : "success"} sx={{ mt: 2 }}>
            {isBlacklisted 
              ? translations[language].blacklist
              : translations[language].notBlacklist}
          </Alert>
          <Alert 
            sx={{ 
              mt: 2,
              backgroundColor: getRiskColor(),
              color: 'white',
              '& .MuiAlert-icon': {
                color: 'white'
              }
            }}
          >
            {riskLevel === 'high' && isOfac
              ? translations[language].highOfac
              : riskLevel === 'high' && isBlacklisted
                ? translations[language].highBlack
                : riskLevel === 'high'
                  ? translations[language].high
                  : riskLevel === 'medium'
                    ? translations[language].medium
                    : translations[language].low}
          </Alert>
          <Button 
            variant="contained" 
            onClick={handleCloseModal} 
            sx={{ mt: 2, width: '100%' }}
          >
            {translations[language].close}
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default App; 