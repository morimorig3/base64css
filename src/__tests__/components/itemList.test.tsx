import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import ItemList from 'components/itemList';
import { base64Data } from 'types';

const file: base64Data = {
  name: 'favicon.svg',
  type: 'image/svg+xml',
  size: 786,
  dataURL:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i44Os44Kk44Ok44O8XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDIwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzNCODJGNjt9DQoJLnN0MXtmaWxsOiNGM0Y0RjY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI3MCw0NSA0MCwxMzUgMTAwLDEzNSAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMzAsNDUgMTAwLDEzNSAxNjAsMTM1IAkiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
  id: '2895fe6b-cad6-421d-9166-3974a42aa04d',
};
describe('ファイルを一つ渡した時', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<ItemList files={[file]} />);
  });
  afterEach(() => {
    renderResult.unmount();
  });
  test('リストにアイテム一つ表示', () => {
    const { getByRole } = renderResult;
    const list = getByRole('list');
    expect(list).not.toBeEmptyDOMElement();
  });
});
