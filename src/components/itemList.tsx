import { VFC } from 'react';

type data = {
  name: string;
  type: string;
  size: number;
  dataURL: unknown;
};

type Props = {
  files: data[];
};

const ItemList: VFC<Props> = ({ files }) => (
  <ul id="files">
    {files.map(({ name, type, size, dataURL }: data, index: number) => (
      <li className="py-6" key={index}>
        <p className="font-bold mb-2">
          {name} ({type}, {size}bytes)
        </p>
        <div className="flex gap-x-4">
          <textarea
            className="w-full border-2"
            defaultValue={`background-image: url('${dataURL}');`}
          ></textarea>
          <div
            className="bg-no-repeat bg-contain w-40 h-40"
            style={{
              backgroundImage: `url('${dataURL}')`,
            }}
          ></div>
        </div>
      </li>
    ))}
  </ul>
);

export default ItemList;
