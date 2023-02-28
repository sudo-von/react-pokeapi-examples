import { screen, render } from '@testing-library/react';
import PokeImage from './PokeImage';

jest.mock('../Image/Image', () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => <div>Image</div>)
}));

describe('PokeImage', () => {
    it('should render expected element', () => {
        render(
            <PokeImage
                src='src'
                alt='alt'
            />
        );
        const pokeImage = screen.getByText('Image');
        expect(pokeImage).toBeInTheDocument();
    });
});