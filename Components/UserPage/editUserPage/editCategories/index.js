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

export const EditCategories = ({ categorie, setNewCategorie }) => {
  const [input, setInputValue] = useState('')

  return (
    <Flex flex="1" flexDir="column" gridGap={3}>
      <Text variant="paragraph">Categorias</Text>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Nombre de categoria" />
          <Input width="100%" value={input} onChange={(e) => setInputValue(e.target.value)} placeholder="máx. 30 caracteres" maxlength="30" />
        </InputGroup>
      </Flex>
    </Flex>
  )
}
