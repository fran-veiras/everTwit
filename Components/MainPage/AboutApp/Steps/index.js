import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Steps = () => {
  return (
    <Flex gridGap={3} flexDir="column">
      <Flex>
        <Box
          boxShadow="md"
          background="secondary"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            Llego la hora de organizar todo el contenido que creaste ¡No lo des
            por perdido!
          </Heading>
        </Box>
      </Flex>
      <Flex gridGap={3}>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            1. Inicia sesión en segundos con Google o con GitHub 🧑‍💻
          </Heading>
        </Box>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">2. Arma tu perfil 🛠</Heading>
        </Box>
        <Box
          boxShadow="md"
          background="lightBlue"
          borderRadius="15px"
          p={2}
          display="flex"
        >
          <Heading variant="subtitle">
            3. Compartí y organiza tus hilos 🧵
          </Heading>
        </Box>
      </Flex>
      <Link href="/login">
        <Flex flexDir="column">
          <Box
            boxShadow="md"
            border="2px solid #FFCCBC"
            background="none"
            borderRadius="15px"
            p={2}
            display="flex"
            justifyContent="center"
            cursor="pointer"
            transition="0.2s"
            _hover={{
              background: 'secondary',
              transition: '0.2s',
              transform: 'scale(1.1)'
            }}
          >
            <Heading variant="subtitle">¡Comenzar! 🚀</Heading>
          </Box>
        </Flex>
      </Link>
    </Flex>
  )
}
