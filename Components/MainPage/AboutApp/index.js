import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { AboutPrice } from './AboutPrice';
import { AppDescription } from './AppDescription';
import { Example } from './Example';
import { Steps } from './Steps';

export const AboutApp = () => {
  return (
    <Box position="relative" display="flex" gridGap={3} flexDir="column">
      <Box mt="120px" mb="60px">
        <Heading variant="super">Dejá de perder tus hilos de twitter.</Heading>
        <Steps />
      </Box>
      <Flex flexDir="column" my="120px">
        <Flex flexDir="row" gridGap={3}>
          <AppDescription />
          <AboutPrice />
        </Flex>
        <Example />
      </Flex>
    </Box>
  );
};
