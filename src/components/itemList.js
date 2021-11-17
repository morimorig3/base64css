const ItemList = ({ files }) => {
  console.log(files);
  return (
    <ul id="files">
      {files.map((file, index) => (
        <li className="py-6" key={index}>
          <p className="font-bold mb-2">
            {file.name} ({file.type}, {file.size}bytes)
          </p>
          <div className="flex gap-x-4">
            <textarea
              className="w-full border-2"
              defaultValue={`background-image: url('${file.data}');`}
            ></textarea>
            <div
              className="bg-no-repeat bg-contain w-40 h-40"
              style={{
                backgroundImage: `url('${file.data}')`,
              }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
