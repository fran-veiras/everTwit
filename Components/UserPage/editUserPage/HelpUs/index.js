/* eslint-disable react/no-children-prop */
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const HelpUs = () => {
  return (
    <Flex flexDir="column" gridGap={3}>
      <Text variant="paragraph">Ayuda</Text>
      <Flex></Flex>
    </Flex>
  );
};
