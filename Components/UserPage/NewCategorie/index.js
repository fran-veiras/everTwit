import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export const NewCatgeorie = ({ route }) => {
  return (
    <Flex width="full" justifyContent="end">
      <Link
        href={{
          pathname: '/user/[id]/edit',
          query: { id: `${route}` }
        }}
      >
        <Button>Nueva Categoria +</Button>
      </Link>
    </Flex>
  )
}
