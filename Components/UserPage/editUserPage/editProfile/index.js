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

export const EditProfile = () => {
  return (
    <Flex flexDir="column" gridGap={3}>
      <Text variant="paragraph">Perfil</Text>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Nombre de usuario" />
          <Input width="30%" placeholder="máx. 30 caracteres" maxlength="30" />
        </InputGroup>
      </Flex>
    </Flex>
  );
};
