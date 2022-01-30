import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const Steps = () => {
  return (
    <Flex gridGap={3} flexDir="column">
      <Flex>
        <Box
          boxShadow="md"
          background="secondary"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            Llego la hora de organizar todo el contenido que creaste ¡No lo des
            por perdido!
          </Heading>
        </Box>
      </Flex>
      <Flex gridGap={3}>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            1. Inicia sesión en segundos con Google o con GitHub 🧑‍💻
          </Heading>
        </Box>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">2. Arma tu perfil 🛠</Heading>
        </Box>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            3. Compartí y organiza tus hilos 🧵
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
};
