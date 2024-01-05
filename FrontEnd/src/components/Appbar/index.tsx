import { useState } from 'react';
import { AppBar, 
  Container, 
  Toolbar, 
  FormControlLabel,
  Switch,
  Typography, } from '@mui/material';

export function MainAppBar() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode(event : boolean) {
    setDarkMode(event);
  }
  return (
    <AppBar position="absolute">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <FormControlLabel 
          control={<Switch onChange={e => handleDarkMode(e.target.checked)}/>} 
          label={<Typography>Set Dark Mode</Typography>}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}