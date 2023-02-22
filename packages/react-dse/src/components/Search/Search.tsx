import { FC } from 'react';
import Button from '../Button/Button';
import Input, { IInputProps } from '../Input/Input';

interface ISearchProps extends IInputProps {
}

const Search: FC<ISearchProps> = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-2 flex items-center pl-1 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;
