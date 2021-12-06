import { VFC } from 'react';
import useFiles from 'hooks/useFiles';
import useModal from 'hooks/useModal';
import Modalwindow from 'components/modalWindow';
import ItemList from 'components/itemList';
import DndArea from 'components/DndArea';
import Button from './Button';

const Base64CssGen: VFC = () => {
  const { data, addData, resetData } = useFiles();
  const { isOpen, openModal, closeModal } = useModal();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    await addData(event.dataTransfer.files);
  };

  return (
    <>
      <DndArea onDrop={handleDrop} />
      {data.length ? (
        <Button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={openModal}>
          リセット
        </Button>
      ) : (
        <Button className="bg-blue-400 pointer-events-none opacity-50 text-white" onClick={openModal}>
          リセット
        </Button>
      )}
      <Modalwindow
        modalIsOpen={isOpen}
        closeModal={closeModal}
        executeFunc={resetData}
        modaltext="すべて削除しますか？"
      />
      <ItemList files={data} />
    </>
  );
};

export default Base64CssGen;
