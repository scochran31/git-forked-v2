import React from 'react';
import Nav from './components/Nav'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Nav />
        <Grid minH="100vh" p={3}>

          Welcome to Git Forked v2
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
