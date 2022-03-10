import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const LatestTwitExample = () => {
  return (
    <Box
      display="inline-flex"
      background="lightBlue"
      gridGap={3}
      padding={3}
      borderRadius="15px"
      flexDir="column"
      position="relative"
    >
      <Flex alignItems="center" gridGap={2} justifyContent="space-between">
        <Flex alignItems="center" gridGap={2}>
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
          <Box>
            <Text fontSize="1rem">⌘ Fran</Text>
            <Text fontSize="0.75rem">@fran_veiras</Text>
          </Box>
        </Flex>

        <Image src="/twitterIcon.png" width="30px" height="30px" />
      </Flex>
      <Flex width="full" flexDir="column" gridGap={2}>
        <Box width="200px" height="20px" background="gray" borderRadius="7px" />
        <Box width="220px" height="20px" background="gray" borderRadius="7px" />
        <Box width="200px" height="20px" background="gray" borderRadius="7px" />
      </Flex>
      <Box
        zIndex="9999"
        width="full"
        height="full"
        position="absolute"
        background="linear-gradient(274deg, rgba(255,255,255,1) 52%, rgba(255,255,255,0.16850490196078427) 100%)"
        top="0"
        left="0"
      ></Box>
    </Box>
  )
}
