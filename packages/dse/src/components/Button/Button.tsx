import { FC, ReactNode } from 'react';

interface IButtonProps {
    variety?: keyof typeof buttonVariety,
    type?: 'submit' | 'button' | 'reset',
    children: ReactNode,
    onClick?: VoidFunction,
}

const buttonVariety = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-green-500 hover:bg-green-700',
    danger: 'bg-rose-500 hover:bg-rose-700',
    warning: 'bg-amber-500 hover:bg-amber-700',
    info: 'bg-sky-500 hover:bg-sky-700',
};

const Button: FC<IButtonProps> = ({
    type = 'submit',
    variety = 'primary',
    children,
    onClick,
}) => {
    const className = `${buttonVariety[variety]} text-white font-bold py-2 px-4 rounded-full`
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;