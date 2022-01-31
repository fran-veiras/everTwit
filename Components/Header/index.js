import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useUser, { USER_STATES } from '../../hooks/useUser';
import { Brand } from '../Styles/Brand';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const user = useUser();
  const route = useRouter();

  const handleLogin = () => {
    route.push('/login');
  };

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Brand />
      <Box
        display="flex"
        flexDir="row"
        gridGap={5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Link href="/">
          <Heading cursor="pointer" variant="subtitle">
            Inicio
          </Heading>
        </Link>
        <Heading cursor="pointer" variant="subtitle">
          Explorar
        </Heading>
        {user === USER_STATES.NOT_LOGED && (
          <Button onClick={handleLogin} variant="primary">
            Login
          </Button>
        )}
        {user !== USER_STATES.NOT_LOGED && user !== USER_STATES.NOT_KNOWN && (
          <Heading cursor="pointer" variant="subtitle">
            Mi perfil
          </Heading>
        )}
        {user !== USER_STATES.NOT_LOGED && user !== USER_STATES.NOT_KNOWN && (
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
        )}
      </Box>
    </Flex>
  );
};
