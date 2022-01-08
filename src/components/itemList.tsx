import { VFC } from 'react';
import { base64Data } from 'types';
import { List, ListItem, Heading, Flex, Box, Textarea } from '@chakra-ui/react';

type Props = {
  files: base64Data[];
};

export const ItemList: VFC<Props> = ({ files }) => (
  <List id="files" w="full" spacing={4}>
    {files.map(({ id, name, type, size, dataURL }) => {
      if (typeof dataURL !== 'string') return false;

      return (
        <ListItem key={id}>
          <Heading as="h2" fontSize="lg" mb={2}>{`${name} ${type},${size} bytes`}</Heading>
          <Flex columnGap={4}>
            <Textarea w="full" value={`background-image: url('${dataURL}');`} />
            <Box
              bgRepeat="no-repeat"
              bgSize="contain"
              w={40}
              h={40}
              style={{
                backgroundImage: `url('${dataURL}')`,
              }}
            />
          </Flex>
        </ListItem>
      );
    })}
  </List>
);
