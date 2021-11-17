import { useRef, useState, useCallback } from 'react';
import Modalwindow from 'components/modalWindow';
import ItemList from './itemList';

const Base64CssGen = () => {
  let fileList = useRef([]);
  const [files, setFiles] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const resetFiles = useCallback(() => setFiles([]), []);
  const clearButton = () => setIsOpen(true);

  const isMatchExtend = useCallback(
    (string) => new RegExp('([^s]+(\\.(jpg|png|gif|svg))$)', 'i').test(string),
    []
  );

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const processFile = async (files) => {
    try {
      const data = await Promise.all(
        files.map(async (file) => {
          const dataURL = await readFileAsync(file);
          return {
            name: file.name,
            type: file.type,
            size: file.size,
            data: dataURL,
          };
        })
      );
      fileList.current = data;
      setFiles(fileList.current);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      isMatchExtend(file.name)
    );
    processFile(files);
  };

  // ブラウザのデフォルト動作をキャンセル
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };
  console.log(files);

  return (
    <>
      <div
        id="drop"
        className="h-24 bg-green-100 border-green-400 border-2 text-gray-400 p-2 mb-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drag and Drop
      </div>
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
