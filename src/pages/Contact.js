import React, { useState } from 'react'
// import Email from '../components/Email';
// import { validateEmail } from '../utils/helpers';
import { db } from '../firebase';
import { collection, addDoc } from '@firebase/firestore';

import {
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'contacts'), {
      name:name,
      email:email,
      message:message,
    })
    .then(() => {
      alert('Message submitted 👍' );
    })
    .catch((error) => {
      alert(error.message);
    });

    setName('');
    setEmail('');
    setMessage('');
  
  };



  return(
    <Flex justifyContent='center'>
      <Box
       p='5vh'
       borderRadius='50px'
       shadow='md'
       borderWidth='2px'
       bgColor='whiteAlpha.700'
      >
        <Text fontSize='3xl'>Contact Us!</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor='name' padding='2'>Name:</FormLabel>
            <Input 
               borderColor='gray.700'
               borderWidth='thin'
               variant='solid'
               name='name'
               value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input 
               borderColor='gray.700'
               borderWidth='thin'
               variant='solid'
               name='email'
               value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Textarea 
                placeholder='Enter a message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

          </FormControl>

          {/* <FormControl mt='2'>
            <Button type='submit' colorScheme='blue'>Sign Up!</Button>
          </FormControl> */}

          <Button colorScheme="teal" variant="solid">
            Submit
          </Button>

        </form>
      </Box>
    </Flex>
  )

}

export default Contact








//   return (
//     <main className="Home">
//       <section className="overlay">
//         <section className="p-10 flex flex-col items-center justify-center">
//           <p className="mr-5 bg-yellow-300 py-2 px-4 rounded-full font-mono hover:bg-blue-500">
//             <Email 
//               label=" Email me" 
//               mailto="mailto:chrispesar1@gmail.com" />
//           </p>
//         </section>

//         <section 
//           className=" flex flex-col items-center justify-center" 
//           onSubmit={handleSubmit}>
//           <div className="p-10">
//             <h2 className="text-white font-mono mb-5 text-center text-4xl">Contact Me!</h2>
//             <p className="text-white font-mono mb-5 text-center text-xl">
//               Please fill out the contact form 
//             </p>
//           </div>

//           <form name="Contact Form" className=" flex flex-col">
//             <input 
//               className="py-2 px-4 mb-5"
//               placeholder="Enter your name: " 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               />

//             <input 
//               className="py-2 px-4 mb-5"
//               placeholder="Enter your email: "
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               />

//             <textarea
//               cols="40"
//               rows="15"
//               placeholder="Enter Message: "
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>

//             <button 
//               className="mr-5 ml-5 m-5 bg-yellow-300 py-5 px-10 rounded-full font-mono hover:bg-blue-500" 
//               type="submit"
//               >Drop me a line!</button>
//           </form>

//         </section>
//       </section>
//     </main>

//   )
// }

// export default Contact








