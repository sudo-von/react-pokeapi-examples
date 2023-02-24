import { FC, ReactNode } from 'react'
import Text, { TextVariant } from '../Text/Text';

interface ITypographyProps {
    size: keyof typeof typographyVariant.size,
    weight: keyof typeof typographyVariant.weight,
    align: keyof typeof typographyVariant.align,
    color: keyof typeof typographyVariant.color,
    variant: TextVariant,
    children: ReactNode,
}

const typographyVariant = {
    size: {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
    },
    weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
    },
    align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
        start: 'text-start',
        end: 'text-end',
    },
    color: {
        white: 'text-white',
        black: 'text-black'
    }
};

const Typography: FC<ITypographyProps> = ({
    size = 'base',
    weight = 'normal',
    align = 'start',
    color = 'black',
    variant = 'p',
    children,
}) => {
    const className = `${typographyVariant.size[size]} ${typographyVariant.weight[weight]} ${typographyVariant.align[align]} ${typographyVariant.color[color]}`;
    return (
        <Text className={className} variant={variant}>{children}</Text>
    );
};

export default Typography;
