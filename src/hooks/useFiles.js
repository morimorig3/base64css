import { useState, useCallback } from 'react';
import { isMatchExtend } from 'util/functions';

const useFiles = () => {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const resetFiles = useCallback(() => {
    setData([]);
    setFiles([]);
  }, []);

  const addFiles = (dataTransferFiles) => {
    const newData = [
      ...data,
      ...Array.from(dataTransferFiles).filter((file) =>
        isMatchExtend(file.name)
      ),
    ];
    setData(newData);
    processFile(newData);
  };

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
      const dataList = await Promise.all(
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
      setFiles([...dataList]);
    } catch (err) {
      console.error(err);
    }
  };

  return [files, addFiles, resetFiles];
};

export default useFiles;
