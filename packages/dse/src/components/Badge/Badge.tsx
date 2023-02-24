import { FC, ReactNode } from 'react'

interface IBadgeProps {
    variety?: keyof typeof badgeVariety,
    children: ReactNode,
}

const badgeVariety = {
    primary: 'bg-blue-200 text-blue-600',
    secondary: 'bg-green-200 text-green-600',
    danger: 'bg-rose-200 text-rose-600',
    warning: 'bg-amber-200 text-amber-600',
    info: 'bg-sky-200 text-sky-600',
};

const Badge: FC<IBadgeProps> = ({
    variety = 'primary',
    children
}) => {
    const className = `${badgeVariety[variety]} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`;
    return (
        <span className={className}>{children}</span>
    );
};

export default Badge;
