import { useState, useCallback } from 'react';
import { isMatchExtend, getDataURLAsync } from 'util/functions';
import { base64Data } from 'types';
import { v4 } from 'uuid';

const useFiles = (): {
  data: base64Data[];
  addData: (dataTransferFiles: FileList) => Promise<void>;
  resetData: () => void;
} => {
  const [data, setData] = useState<base64Data[]>([]);
  const resetData = useCallback(() => {
    setData([]);
  }, []);

  const loadFile = async (files: File[]) => {
    const fileList = files.map(async (file: File) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const dataURL = await getDataURLAsync(file);

      return {
        name: file.name,
        type: file.type,
        size: file.size,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        dataURL,
        id: v4(),
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
