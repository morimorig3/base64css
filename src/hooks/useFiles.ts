import { useState, useCallback, useRef } from 'react';
import { isMatchExtend } from 'util/functions';

type data = {
  name: string;
  type: string;
  size: number;
  dataURL: unknown;
};

const useFiles = () => {
  let rawData = useRef<File[]>([]);
  const [data, setData] = useState<data[]>([]);
  const resetData = useCallback(() => {
    rawData.current = [];
    setData([]);
  }, []);

  const addData = (dataTransferFiles: FileList): void => {
    const newRawData = [
      ...rawData.current,
      ...Array.from(dataTransferFiles).filter((file: File) =>
        isMatchExtend(file.name)
      ),
    ];
    rawData.current = newRawData;
    processFile(rawData.current);
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
            dataURL: dataURL,
          };
        })
      );
      setData([...dataList]);
    } catch (err) {
      console.error(err);
    }
  };
  return { data, addData, resetData };
};

export default useFiles;
