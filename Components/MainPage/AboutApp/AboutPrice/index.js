import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const AboutPrice = () => {
  return (
    <Box my={3}>
      <Heading variant="title">100% gratis</Heading>
      <Box my={4}>
        <Text variant="paragraph">
          La aplicación no cuenta con partes pagas,{' '}
          <Text variant="paragraph" display="inline" background="secondary">
            todas las funcionalidades son 100% gratuitas.
          </Text>{' '}
          En el caso de querer ayudar al creador haga click{' '}
          <a href="www.franciscoveiras.com">
            <Text display="inline" variant="paragraph" color="blue">
              acá
            </Text>
          </a>
        </Text>
      </Box>
    </Box>
  );
};
