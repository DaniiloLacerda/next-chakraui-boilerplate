import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Dashboard() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        align="center"
        justify="center"
      >
        DASHBOARD PAGE
      </Flex>
    </Flex>
  )
}
