import { FC, ReactNode } from 'react'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'p' | 'span';

export interface ITextProps {
    variant?: TextVariant,
    children: ReactNode,
    className?: string,
}

const Text: FC<ITextProps> = ({
    variant = 'p',
    children,
    className
}) => {
    switch (variant) {
        case 'h1':
            return <h1 className={className}>{children}</h1>
        case 'h2':
            return <h2 className={className}>{children}</h2>
        case 'h3':
            return <h3 className={className}>{children}</h3>
        case 'h4':
            return <h4 className={className}>{children}</h4>
        case 'h5':
            return <h5 className={className}>{children}</h5>
        case 'h6':
            return <h6 className={className}>{children}</h6>
        case 'small':
            return <small className={className}>{children}</small>
        case 'p':
            return <p className={className}>{children}</p>
        case 'span':
            return <span className={className}>{children}</span>
        default:
            return <p className={className}>{children}</p>;
    }
};

export default Text;
