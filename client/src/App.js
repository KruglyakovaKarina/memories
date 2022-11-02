import React from 'react';
import { MuiThemeProvider, createTheme, Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#de5fa1',
    },
    secondary: {
      main: '#de5f5f',
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Container maxWidth='lg'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
