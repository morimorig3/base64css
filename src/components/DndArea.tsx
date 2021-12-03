import { VFC } from 'react';

type Props = {
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

const DndArea: VFC<Props> = ({ onDrop = () => undefined }) => {
  // ブラウザのデフォルト動作をキャンセル
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'copy';
  };

  return (
    <div
      className="h-24 border-green-400 bg-green-100 border-2 text-gray-400 p-2 mb-4"
      onDrop={onDrop}
      onDragOver={handleDragOver}
    >
      Drag and Drop
    </div>
  );
};

export default DndArea;
