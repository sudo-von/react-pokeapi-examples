import { screen, render } from '@testing-library/react';
import PokeImage from './PokeImage';

describe('PokeImage', () => {
    it('should render expected element', () => {
        render(
            <PokeImage
                src='src'
                alt='PokeImage'
            />
        );
        const pokeImage = screen.getByAltText('PokeImage');
        expect(pokeImage).toBeInTheDocument();
    });
});