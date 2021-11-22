import { isMatchExtend } from 'util/functions';

describe('isMatchExtend', () => {
  const filepathJPG = '/assets/img/test.jpg';
  const filepathPNG = '/assets/img/test.PNG';
  const filepathGIF = '/assets/img/test.GIF';
  const filepathSVG = '/assets/img/test.SVG';
  const filepathMOV = '/assets/img/test.mov';

  test('拡張子が.jpg|.png|.gif|.svgならtrue', () => {
    expect(isMatchExtend(filepathJPG)).toBe(true);
    expect(isMatchExtend(filepathPNG)).toBe(true);
    expect(isMatchExtend(filepathGIF)).toBe(true);
    expect(isMatchExtend(filepathSVG)).toBe(true);
  });

  test('拡張子が.jpg|.png|.gif|.svg以外ならfalse', () => {
    expect(isMatchExtend(filepathMOV)).toBe(false);
  });

  test('引数が空の時はfalse', () => {
    expect(isMatchExtend()).toBe(false);
  });
});
