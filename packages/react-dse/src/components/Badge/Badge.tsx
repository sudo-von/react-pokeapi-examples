import { FC, ReactNode } from 'react'

interface IBadgeProps {
    variety?: keyof typeof badgeVariety,
    children: ReactNode,
}

const badgeVariety = {
    primary: 'bg-blue-100 text-blue-200',
    secondary: 'bg-green-100 text-green-200',
    danger: 'bg-rose-100 text-rose-200',
    warning: 'bg-amber-100 text-amber-200',
    info: 'bg-sky-100 text-sky-200',
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
