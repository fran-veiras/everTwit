import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Brand } from '../Styles/Brand'

export const FooterComponent = () => {
  return (
    <footer>
      <Container>
        <Flex width="full" height="full">
          <Box>
            <Text variant="paragraph">© 2022 EverTwit.</Text>
          </Box>
          <Box></Box>
        </Flex>
      </Container>
      <style jsx>{`
        footer {
          padding: 20px;
          background: #d3e3fc;
        }
      `}</style>
    </footer>
  )
}
