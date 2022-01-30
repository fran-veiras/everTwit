import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { TwitExample } from './TwitExample';
import { LatestTwitExample } from './TwitExample/latest';

export const Example = () => {
  return (
    <Box my={10}>
      <Heading variant="title">Ordená por categorias</Heading>
      <Flex my={4} gridGap={3}>
        <Box background="blue" borderRadius="15px" p={2} display="flex">
          <Heading variant="subtitle">{`Programación </>`}</Heading>
        </Box>
        <Box background="blue" borderRadius="15px" p={2} display="flex">
          <Heading variant="subtitle">Diseño 🧑‍🎨</Heading>
        </Box>
        <Box background="blue" borderRadius="15px" p={2} display="flex">
          <Heading variant="subtitle">Recomendaciones 🙌🏽</Heading>
        </Box>
        <Box background="blue" borderRadius="15px" p={2} display="flex">
          <Heading variant="subtitle">Herramientas ⚙️</Heading>
        </Box>
      </Flex>
      <Flex gridGap={2}>
        <TwitExample />
        <TwitExample />
        <TwitExample />
        <LatestTwitExample />
      </Flex>
    </Box>
  );
};
