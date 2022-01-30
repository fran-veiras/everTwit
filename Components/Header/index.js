import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Brand } from '../Styles/Brand';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Brand />
      <Box
        display="flex"
        flexDir="row"
        gridGap={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading cursor="pointer" variant="subtitle">
          Inicio
        </Heading>
        <Heading cursor="pointer" variant="subtitle">
          Explorar
        </Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Flex
          width="40px"
          height="40px"
          background="primary"
          color="secondary"
          alignItems="center"
          justifyContent="center"
          borderRadius="9999px"
        >
          F
        </Flex>
      </Box>
    </Flex>
  );
};
