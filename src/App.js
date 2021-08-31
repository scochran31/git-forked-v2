import React from 'react';
import Nav from './components/Nav'
import Contact from './pages/Contact';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Router>
          <Nav />
          <Switch>
            <Grid minH="100vh" p={3}>
              Welcome to Git Forked v2
            </Grid>
            <Route path='/contact'><Contact /></Route> 
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
