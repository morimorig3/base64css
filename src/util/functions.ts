// 対応拡張子かチェック
export const isMatchExtend = (string: string): boolean => /.+\.(jpg|png|svg|gif)/i.test(string);

type getDataURLAsync = (file: File) => Promise<string | ArrayBuffer | null>;

export const getDataURLAsync: getDataURLAsync = async (file) => {
  const promise = await new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

  return promise;
};
