const DndArea = ({ onDrop }) => {
  // ブラウザのデフォルト動作をキャンセル
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  };
  return (
    <div
      className={`h-24 border-green-400 bg-green-100 border-2 text-gray-400 p-2 mb-4`}
      onDrop={onDrop}
      onDragOver={handleDragOver}
    >
      Drag and Drop
    </div>
  );
};

export default DndArea;
