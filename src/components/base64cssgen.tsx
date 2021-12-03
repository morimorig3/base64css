import { VFC } from 'react';
import useFiles from 'hooks/useFiles';
import useModal from 'hooks/useModal';
import Modalwindow from 'components/modalWindow';
import ItemList from 'components/itemList';
import DndArea from 'components/DndArea';

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
        <button
          className="bg-blue-400 hover:bg-blue-500 transition-colors
          font-bold py-2 px-4 rounded text-white"
          onClick={openModal}
          type="button"
        >
          リセット
        </button>
      ) : (
        <button
          className="bg-blue-400 font-bold py-2 px-4 rounded
          text-white pointer-events-none opacity-50"
          type="button"
        >
          リセット
        </button>
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
