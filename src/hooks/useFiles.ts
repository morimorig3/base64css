import { useState, useCallback } from 'react';
import { isMatchExtend, getDataURLAsync } from 'util/functions';
import { base64Data } from 'types';
import { uuid } from 'uuidv4';

const useFiles = () => {
  const [data, setData] = useState<base64Data[]>([]);
  const resetData = useCallback(() => {
    setData([]);
  }, []);

  const loadFile = async (files: File[]) => {
    const fileList = files.map(async (file: File) => {
      const dataURL = await getDataURLAsync(file);

      return {
        name: file.name,
        type: file.type,
        size: file.size,
        dataURL,
        id: uuid(),
      };
    });

    await Promise.all(fileList).then((res: base64Data[]) => {
      setData([...data, ...res]);
    });
  };
  const addData = async (dataTransferFiles: FileList) => {
    const files = Array.from(dataTransferFiles);
    const filteredFiles = [...files.filter((file: File) => isMatchExtend(file.name))];

    await loadFile(filteredFiles);
  };

  return { data, addData, resetData };
};

export default useFiles;
