import { ReactNode, VFC } from 'react';
import { Container, Box, Link, VStack } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <Container maxW="container.lg" px={5} py={10}>
    <Box textAlign="center" py={5}>
      <Link fontSize="2xl" color="white" fontWeight="bold" href="https://www.morimorig3.com/">
        morimorig3.com
      </Link>
    </Box>
    <VStack bg="gray.50" borderRadius="md" p={5} spacing={5} alignItems="flex-start">
      {children}
    </VStack>
  </Container>
);
