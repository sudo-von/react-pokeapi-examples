import { FC, ReactNode } from 'react'
import PokemonTypes, { PokemonTypesVariety } from '../../entities/pokemon-types';

export interface IPokeBadgeProps {
    variety?: PokemonTypes,
    children: ReactNode,
}

const classes: PokemonTypesVariety = {
    normal: "bg-slate-200 text-slate-600",
    fighting: "bg-red-200 text-red-600",
    flying: "bg-cyan-100 text-cyan-600",
    poison: "bg-purple-200 text-purple-600",
    ground: "bg-stone-200 text-stone-600",
    rock: "bg-stone-400 text-stone-600",
    bug: "bg-green-200 text-green-600",
    ghost: "bg-violet-200 text-violet-600",
    steel: "bg-slate-300 text-slate-600",
    fire: "bg-red-400 text-red-600",
    water: "bg-blue-200 text-blue-600",
    grass: "bg-lime-200 text-lime-600",
    electric: "bg-yellow-200 text-yellow-600",
    psychic: "bg-violet-300 text-violet-600",
    ice: "bg-sky-200 text-sky-600",
    dragon: "bg-rose-400 text-rose-600",
    dark: "bg-slate-400 text-slate-700",
    fairy: "bg-fuchsia-200 text-fuchsia-600",
    unknown: "bg-slate-100 text-slate-600",
    shadow: "bg-stone-500 text-stone-700",
};

const PokeBadge: FC<IPokeBadgeProps> = ({
    variety = 'normal',
    children
}) => {
    const className = `${classes[variety]} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`;
    return (
        <span className={className}>{children}</span>
    );
};

export default PokeBadge;
