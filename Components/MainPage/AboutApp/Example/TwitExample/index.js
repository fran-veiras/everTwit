import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const TwitExample = () => {
  return (
    <Box
      display="inline-flex"
      background="lightBlue"
      gridGap={3}
      padding={3}
      borderRadius="15px"
      flexDir="column"
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
            <Text fontSize="1rem" fontWeight="bold" variant="paragraph">
              ⌘ Fran
            </Text>
            <Text fontSize="0.75rem" variant="paragraph">
              @fran_veiras
            </Text>
          </Box>
        </Flex>

        <Image src="/twitterIcon.png" width="30px" height="30px" />
      </Flex>
      <Flex width="full" flexDir="column" gridGap={2}>
        <Box width="200px" height="20px" background="gray" borderRadius="7px" />
        <Box width="220px" height="20px" background="gray" borderRadius="7px" />
        <Box width="200px" height="20px" background="gray" borderRadius="7px" />
      </Flex>
    </Box>
  );
};
