/* eslint-disable jsx-a11y/alt-text */
import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Brand = () => {
  return (
    <Flex alignItems="center" gridGap={3}>
      <Image src="/branding.png" width="35px" height="35px" />
      <Heading variant="brand">ever2it</Heading>
    </Flex>
  )
}
