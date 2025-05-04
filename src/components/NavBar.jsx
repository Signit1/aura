import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logoAura from '../assets/logoAura.png';

const menuTranslations = {
  en: {
    products: 'About AURA',
    pricing: 'Subscription',
    blog: 'Blog',
    connect: 'Connect Wallet',
    profile: 'Profile',
    account: 'Account',
    dashboard: 'Dashboard',
    logout: 'Logout',
    settings: 'Open settings',
    spanish: 'Spanish',
    english: 'English'
  },
  es: {
    products: 'Acerca de AURA',
    pricing: 'Suscripción',
    blog: 'Blog',
    connect: 'Conectar Wallet',
    profile: 'Perfil',
    account: 'Cuenta',
    dashboard: 'Panel',
    logout: 'Cerrar Sesión',
    settings: 'Abrir configuración',
    spanish: 'Español',
    english: 'Inglés'
  }
};

function ResponsiveAppBar({ onLanguageChange, language = 'es', onLogout, onNavigate }) {
  const t = menuTranslations[language];
  const pages = [t.connect, t.products, t.pricing, t.blog];
  const settings = [t.profile, t.account, t.dashboard, t.spanish, t.english, t.logout];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting) => {
    if (setting === t.spanish) onLanguageChange('es');
    else if (setting === t.english) onLanguageChange('en');
    else if (setting === t.logout) onLogout();
    handleCloseUserMenu();
  };

  const handlePageClick = (page) => {
    if (page === t.connect) {
      onNavigate('main');
    } else if (page === t.pricing) {
      onNavigate('subscription');
    } else if (page === t.products) {
      onNavigate('about');
    }
    handleCloseNavMenu();
  };

  const handleLogoClick = () => {
    onNavigate('main');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a1929', color: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              mr: 2,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={handleLogoClick}
          >
            <img src={logoAura} alt="Aura Logo" style={{ height: 100 }} />
          </Box>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={handleLogoClick}
          >
            <img src={logoAura} alt="Aura Logo" style={{ height: 48, marginRight: 8 }} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{ my: 2, color: '#fff', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t.settings}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
