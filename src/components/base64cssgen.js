import { useRef, useState, useCallback } from 'react';

const Base64CssGen = () => {
  let fileList = useRef([]);
  const [files, setFiles] = useState([]);

  const resetFiles = useCallback(() => setFiles([]), []);
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
      console.log(err);
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
      <button
        className="bg-blue-400 hover:bg-blue-500 transition-colors font-bold py-2 px-4 rounded text-white"
        onClick={resetFiles}
      >
        リセット
      </button>
      <ul id="files">
        {files.map((file, index) => (
          <li className="py-6" key={index}>
            <p className="font-bold mb-2">
              {file.name} ({file.type}, {file.size}bytes)
            </p>
            <div className="flex gap-x-4">
              <textarea
                className="w-full border-2"
                defaultValue={`background-image: url('${file.data}');`}
              ></textarea>
              <div
                className="bg-no-repeat bg-contain w-40 h-40"
                style={{
                  backgroundImage: `url('${file.data}')`,
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Base64CssGen;
