import { useState } from 'react';
import Modalwindow from 'components/modalWindow';
import ItemList from './itemList';
import DndArea from './DndArea';
import useFiles from 'hooks/useFiles';

const Base64CssGen = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [files, addFiles, resetFiles] = useFiles();

  const clearButton = () => setIsOpen(true);

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
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        executeFunc={resetFiles}
        modaltext="すべてのボードを削除しますか？"
      />
      <ItemList files={files} />
    </>
  );
};

export default Base64CssGen;
