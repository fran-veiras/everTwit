import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const BannerPage = () => {
  return (
    <Box
      width="100%"
      height="15vw"
      background="black"
      borderRadius="15px"
      backgroundImage={`/user/mountains.jpeg`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      <Flex
        background="white"
        width="160px"
        height="160px"
        borderRadius="9999px"
        position="absolute"
        bottom="-80px"
        left="50px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width="150px"
          height="150px"
          background="primary"
          color="secondary"
          alignItems="center"
          justifyContent="center"
          borderRadius="9999px"
        >
          <Heading variant="super" color="secondary" fontWeight="500">
            F
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};
