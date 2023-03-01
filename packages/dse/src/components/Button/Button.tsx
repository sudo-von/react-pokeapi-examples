import { FC, ReactNode } from 'react';
import PokemonTypes, { PokemonTypesVariety } from '../../entities/pokemon-types';

export interface IButtonProps {
    variety?: PokemonTypes,
    type?: 'submit' | 'button' | 'reset',
    children: ReactNode,
    onClick?: VoidFunction,
}

const classes: PokemonTypesVariety = {
    normal: "bg-slate-100 hover:bg-slate-200 text-slate-400",
    fighting: "bg-red-100 hover:bg-red-200 text-red-400",
    flying: "bg-cyan-100 hover:bg-cyan-200 text-cyan-400",
    poison: "bg-purple-100 hover:bg-purple-200 text-purple-400",
    ground: "bg-stone-100 hover:bg-stone-200 text-stone-400",
    rock: "bg-stone-100 hover:bg-stone-200 text-stone-400",
    bug: "bg-green-100 hover:bg-green-200 text-green-400",
    ghost: "bg-violet-100 hover:bg-violet-200 text-violet-400",
    steel: "bg-slate-100 hover:bg-slate-200 text-slate-400",
    fire: "bg-red-100 hover:bg-red-200 text-red-400",
    water: "bg-blue-100 hover:bg-blue-200 text-blue-400",
    grass: "bg-lime-100 hover:bg-lime-200 text-lime-400",
    electric: "bg-yellow-100 hover:bg-yellow-200 text-yellow-400",
    psychic: "bg-violet-100 hover:bg-violet-200 text-violet-400",
    ice: "bg-sky-100 hover:bg-sky-200 text-sky-400",
    dragon: "bg-rose-100 hover:bg-rose-200 text-rose-400",
    dark: "bg-slate-100 hover:bg-slate-200 text-slate-400",
    fairy: "bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-400",
    unknown: "bg-slate-100 hover:bg-slate-200 text-slate-400",
    shadow: "bg-stone-100 hover:bg-stone-200 text-stone-400",
};

const Button: FC<IButtonProps> = ({
    type = 'submit',
    variety = 'normal',
    children,
    onClick,
}) => {
    const className = `${classes[variety]} font-bold py-2 px-4 rounded-full shadow`
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