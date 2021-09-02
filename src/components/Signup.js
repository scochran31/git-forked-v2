// import React, {useState} from 'react'
import React, { useRef } from 'react';

import{
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'



const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()



//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = event => {
//       event.preventDefault();
//       alert(`Email: ${email} & Password: ${password}`);
//     }

  return (
   <Flex width="full" align="center" justifyContent="center">
     <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
       <Box textAlign="center">
          <Heading>Signup</Heading>
       </Box>
       <Box my={4} textAlign="left">
         {/* <form onSubmit={handleSubmit}> */}
         <form>
           <FormControl isRequired>
             <FormLabel>Email</FormLabel>
             <Input 
                type="email" 
                ref={emailRef}
                placeholder="test@test.com"
                size="lg"
                // onChnage={event => setEmail(event.CurrentTarget.value)}
                />
           </FormControl>

           <FormControl isRequired mt={6}>
             <FormLabel>Password</FormLabel>
             <Input 
                type="password" 
                ref={passwordRef}
                placeholder="******" 
                size="lg"
                // onChange={event => setPassword(event.currentTarget.value)}  
                />
           </FormControl>

           <FormControl isRequired>
             <FormLabel>Password Confirmation</FormLabel>
             <Input 
                type="password" 
                ref={passwordConfirmRef}
                placeholder="******"
                size="lg"
                // onChnage={event => setEmail(event.CurrentTarget.value)}
                />
           </FormControl>

           <Button 
              type="submit" 
              width="full" 
              mt={4} 
              variantColor="teal" 
              variant="outline">
              Sign Up
           </Button>
         </form>
       </Box>
     </Box>
   </Flex>
  );
}

export default Signup
