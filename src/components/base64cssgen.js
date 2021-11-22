import Modalwindow from 'components/modalWindow';
import ItemList from './itemList';
import DndArea from './DndArea';
import useFiles from 'hooks/useFiles';
import useModal from 'hooks/useModal';

const Base64CssGen = () => {
  const [files, addFiles, resetFiles] = useFiles();
  const [isOpen, openModal, closeModal] = useModal();

  const clearButton = () => openModal();

  const handleDrop = (event) => {
    event.preventDefault();
    addFiles(event.dataTransfer.files);
  };

  return (
    <>
      <DndArea onDrop={handleDrop} />
      {files.length ? (
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
        executeFunc={resetFiles}
        modaltext="すべて削除しますか？"
      />
      <ItemList files={files} />
    </>
  );
};

export default Base64CssGen;
