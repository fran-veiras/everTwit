import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Brand = () => {
  return (
    <Flex alignItems="center" gridGap={3}>
      <Image src="/branding.png" width="45px" height="45px" />
      <Heading variant="brand">ever2it</Heading>
    </Flex>
  );
};
