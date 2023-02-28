import { screen, render } from '@testing-library/react';
import PokeBadge from './PokeBadge';

describe('PokeBadge', () => {
    it('should render expected element', () => {
        render(<PokeBadge>#001</PokeBadge>);
        const pokeBadge = screen.getByText('#001');
        expect(pokeBadge).toBeInTheDocument();
    });
});