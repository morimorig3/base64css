import { VFC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

export const DndArea: VFC<Props> = ({ onDrop = () => undefined }) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      w="full"
      h={24}
      border={2}
      borderStyle="solid"
      borderColor="green.100"
      bg="green.50"
      color="gray.400"
      p={2}
      onDrop={onDrop}
      onDragOver={handleDragOver}
      data-testid="dnd-area"
    >
      Drag and Drop
    </Box>
  );
};
