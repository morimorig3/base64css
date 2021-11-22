// 対応拡張子かチェック
export const isMatchExtend = (string: string): boolean =>
  new RegExp('([^s]+(\\.(jpg|png|gif|svg))$)', 'i').test(string);
