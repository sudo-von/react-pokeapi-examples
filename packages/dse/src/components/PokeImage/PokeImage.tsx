import { FC } from 'react';
import Image, { IImageProps } from '../Image/Image';

export interface IPokeImageProps extends Omit<IImageProps, 'fit'|'width'|'height'> {}

const PokeImage: FC<IPokeImageProps> = ({
    src,
    alt,
}) => {
    return (
        <div className='bg-slate-200 bg-opacity-25 w-20 rounded-full'>
            <Image
                src={src}
                alt={alt}
                fit='contain'
            />
        </div>
    );
};

export default PokeImage;
