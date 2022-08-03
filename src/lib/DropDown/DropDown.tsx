import { useEffect, useState } from 'react';

import TextField from '../TextField';

import { IData, IProps } from './types';

function DropDown({ defaultValue, onSelect, data }: IProps) {
  const [selected, setSelected] = useState<IData>(defaultValue);
  const [search, setSearch] = useState(defaultValue.value || '');
  const [searchData, setSearchData] = useState<IData[]>(data);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (search === selected?.value) {
      setShow(false);
      return;
    }

    if (search) {
      const newData = data.filter((item) =>
        item.value.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(newData);
      if (!show) setShow(true);
      return;
    }

    setSearchData(data);
  }, [search]);

  const renderOptions = () => {
    if (!show) return null;

    return (
      <div className="absolute w-full bg-white z-10 max-h-64 min-h-0 overflow-y-auto rounded-lg shadow-lg border-2 border-pink-300">
        {searchData.map((item) => (
          <div
            onClick={() => {
              onSelect(item.mainData);
              setSelected(item);
              setSearch(item.value);
            }}
            key={item.key}
            className="p-2 hover:bg-pink-300"
          >
            {item.value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="relative">
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Şehir İsmi"
          value={search}
        />
        <button
          onClick={() => {
            setShow((state) => !state);
            setSearch('');
          }}
          className="absolute top-0 right-0 px-1 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="hover:text-pink-500"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </button>
      </div>
      {renderOptions()}
    </div>
  );
}

export default DropDown;
