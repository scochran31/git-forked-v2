import React from 'react';


import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Signup from './components/Signup';




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
import forked from './assets/images/forked.png'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgImg={forked} bgPos='top' bgSize='cover' minH='100vh' w='100vw' position='sticky'>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/signup' component={Signup}/>
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
