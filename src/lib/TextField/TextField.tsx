import React from 'react';

function TextField({
  value,
  onChange,
  placeholder,
  error,
  label,
  defaultValue,
}: IProps) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && <label>{label}</label>}
      <input
        className="h-10 px-2 w-full border-2 border-pink-300 focus:border-pink-500 outline-none italic rounded-lg shadow-lg"
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type="text"
      />
      {error && <div>{error}</div>}
    </div>
  );
}

export default TextField;

interface IProps {
  defaultValue?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  label?: string;
}
