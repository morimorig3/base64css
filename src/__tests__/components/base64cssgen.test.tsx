import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import Base64CssGen from 'components/base64cssgen';

describe('初期状態', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Base64CssGen />);
  });
  afterEach(() => {
    renderResult.unmount();
  });
  test('base64リストが一つも表示されていない', () => {
    const { getByRole } = renderResult;
    const list = getByRole('list');
    expect(list).toBeEmptyDOMElement();
  });
  test('クリアボタンが非活性状態になっている', () => {
    const { getByRole } = renderResult;
    const button = getByRole('button');
    expect(button).toHaveClass('pointer-events-none');
  });
});
