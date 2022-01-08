import { VFC } from 'react';
import useFiles from 'hooks/useFiles';
import { Modalwindow } from 'components/modalWindow';
import { ItemList } from 'components/itemList';
import { DndArea } from 'components/dndArea';
import { Button, useDisclosure } from '@chakra-ui/react';

const Base64CssGen: VFC = () => {
  const { data, addData, resetData } = useFiles();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    await addData(event.dataTransfer.files);
  };

  return (
    <>
      <DndArea onDrop={handleDrop} />
      {data.length ? (
        <Button colorScheme="blue" size="md" isDisabled={false} onClick={onOpen}>
          リセット
        </Button>
      ) : (
        <Button colorScheme="blue" size="md" isDisabled>
          リセット
        </Button>
      )}
      <Modalwindow isOpen={isOpen} onClose={onClose} onConfirmed={resetData} title="すべて削除しますか？" />
      <ItemList files={data} />
    </>
  );
};

export default Base64CssGen;
