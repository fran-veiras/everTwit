import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const AppDescription = () => {
  return (
    <Box my={3}>
      <Heading variant="title">Acerca de EverTwit</Heading>
      <Box my={4}>
        <Text variant="paragraph">
          Es una aplicación pensada para que dejes de buscar tus hilos viejos
          por el enorme timeline de tu perfil. Olvidate de fijar un hilo con
          todos los hilos que creaste 🥴.
          <br />
          <Text variant="paragraph" display="inline" background="secondary">
            Mejor da el paso y unite a EverTwit.
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
