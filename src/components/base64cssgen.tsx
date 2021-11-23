import { VFC } from 'react';
import Modalwindow from 'components/modalWindow';
import ItemList from './itemList';
import DndArea from './DndArea';
import useFiles from 'hooks/useFiles';
import useModal from 'hooks/useModal';

type data = {
  name: string;
  type: string;
  size: number;
  dataURL: unknown;
};

type useModalType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type useFilesType = {
  data: data[];
  addData: (dataTransferFiles: FileList) => void;
  resetData: () => void;
};

const Base64CssGen: VFC = () => {
  const { data, addData, resetData }: useFilesType = useFiles();
  const { isOpen, openModal, closeModal }: useModalType = useModal();

  const clearButton = () => openModal();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    addData(event.dataTransfer.files);
  };

  return (
    <>
      <DndArea onDrop={handleDrop} />
      {data.length ? (
        <button
          className="bg-blue-400 hover:bg-blue-500 transition-colors font-bold py-2 px-4 rounded text-white"
          onClick={clearButton}
        >
          リセット
        </button>
      ) : (
        <button className="bg-blue-400 font-bold py-2 px-4 rounded text-white pointer-events-none opacity-50">
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
