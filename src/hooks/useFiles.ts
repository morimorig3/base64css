import { useState, useCallback } from 'react';
import { isMatchExtend } from 'util/functions';

type file = {
  name: string;
  type: string;
  size: number;
  data: unknown;
};

const useFiles = () => {
  const [data, setData] = useState<File[]>([]);
  const [files, setFiles] = useState<file[]>([]);
  const resetFiles = useCallback(() => {
    setData([]);
    setFiles([]);
  }, []);

  const addFiles = (dataTransferFiles: FileList): void => {
    const newData = [
      ...data,
      ...Array.from(dataTransferFiles).filter((file: File) =>
        isMatchExtend(file.name)
      ),
    ];
    setData(newData);
    processFile(newData);
  };

  const readFileAsync = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const processFile = async (files: File[]) => {
    try {
      const dataList = await Promise.all(
        files.map(async (file: File) => {
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
