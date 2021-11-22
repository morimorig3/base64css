import { VFC } from 'react';

type file = {
  name: string;
  type: string;
  size: string;
  data: string;
};

type Props = {
  files: file[];
};

const ItemList: VFC<Props> = ({ files }) => (
  <ul id="files">
    {files.map(({ name, type, size, data }: file, index: number) => (
      <li className="py-6" key={index}>
        <p className="font-bold mb-2">
          {name} ({type}, {size}bytes)
        </p>
        <div className="flex gap-x-4">
          <textarea
            className="w-full border-2"
            defaultValue={`background-image: url('${data}');`}
          ></textarea>
          <div
            className="bg-no-repeat bg-contain w-40 h-40"
            style={{
              backgroundImage: `url('${data}')`,
            }}
          ></div>
        </div>
      </li>
    ))}
  </ul>
);

export default ItemList;
