// 対応拡張子かチェック
export const isMatchExtend = (string: string): boolean => /.+\.(jpg|png|svg|gif)/i.test(string);

export const getDataURLAsync = (file: File): Promise<string | ArrayBuffer | null> =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
    reader.onerror = reject;
  });
