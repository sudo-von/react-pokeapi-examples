import { FC } from 'react';

interface IInputProps {
    name?: string,
    value?: string,
    type?: 'text' | 'number',
    placeholder?: string,
    onChange: VoidFunction,
}

const Input: FC<IInputProps> = ({
    name,
    value,
    type = 'text',
    placeholder,
    onChange,
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
    );
};

export default Input;
