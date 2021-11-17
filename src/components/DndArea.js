import { useState } from 'react';

const DndArea = ({ onDrop }) => {
  const [isDrag, setIsDrag] = useState(false);
  // ブラウザのデフォルト動作をキャンセル
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setIsDrag(true);
  };
  const handleDragLeave = () => {
    setIsDrag(false);
  };
  return (
    <div
      className={`h-24  ${
        isDrag
          ? `border-yellow-400 bg-yellow-100`
          : `border-green-400 bg-green-100`
      } border-2 text-gray-400 p-2 mb-4`}
      onDrop={onDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      Drag and Drop
    </div>
  );
};

export default DndArea;
