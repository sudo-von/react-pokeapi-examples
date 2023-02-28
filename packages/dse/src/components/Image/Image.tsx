import { FC } from 'react';

export interface IImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    fit?: keyof typeof imageVariant.fit,
}

const imageVariant = {
    fit: {
        contain: 'object-contain',
        cover: 'object-cover',
        fill: 'object-fill',
        none: 'object-none',
        scale: 'object-scale-down',
    }
};

const Image: FC<IImageProps> = ({
    src,
    alt,
    width,
    height,
    fit = 'none',
}) => {
    const className = `${imageVariant.fit[fit]}`
    return (
        <img src={src} alt={alt} className={className} height={height} width={width} />
    );
};

export default Image;
