import { VFC } from 'react';
import { base64Data } from 'types';

type Props = {
  files: base64Data[];
};

const ItemList: VFC<Props> = ({ files }) => (
  <ul id="files">
    {files.map(({ id, name, type, size, dataURL }) => {
      if (typeof dataURL !== 'string') return false;

      return (
        <li className="py-6" key={id}>
          <p className="font-bold mb-2">{`${name} ${type},${size} bytes`}</p>
          <div className="flex gap-x-4">
            <textarea className="w-full border-2" defaultValue={`background-image: url('${dataURL}');`} />
            <div
              className="bg-no-repeat bg-contain w-40 h-40"
              style={{
                backgroundImage: `url('${dataURL}')`,
              }}
            />
          </div>
        </li>
      );
    })}
  </ul>
);

export default ItemList;
