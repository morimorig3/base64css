import { VFC } from 'react';
import { Heading, Flex, Link, Divider, VStack } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import Base64CssGen from 'components/base64cssgen';
import { FaGithub } from 'react-icons/fa';

const App: VFC = () => (
  <Layout>
    <Flex w="full" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="md">
        Base64 background-imageジェネレーター
      </Heading>
      <Link href="https://github.com/morimorig3/base64css" isExternal>
        <FaGithub size="2em" />
      </Link>
    </Flex>
    <Divider />
    <VStack w="full" alignItems="flex-start" spacing={5}>
      <Base64CssGen />
    </VStack>
  </Layout>
);

export default App;
