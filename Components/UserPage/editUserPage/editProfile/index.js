/* eslint-disable react/no-children-prop */
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'

export const EditProfile = ({ name, setNewName }) => {
  return (
    <Flex flex="1" flexDir="column" gridGap={3}>
      <Text variant="paragraph">Perfil</Text>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Nombre de usuario" />
          <Input value={name} onChange={(e) => setNewName(e.target.value)} width="100%" placeholder="máx. 30 caracteres" maxlength="30" />
        </InputGroup>
      </Flex>
    </Flex>
  )
}
