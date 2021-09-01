import React from 'react';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {
  ChakraProvider,
  Box,
  // Grid,
  theme,
} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import forked from './assets/images/forked.jpg'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgImg={forked} bgPos='center' minH='100vh' h='100%' w='100%' position='sticky'>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
