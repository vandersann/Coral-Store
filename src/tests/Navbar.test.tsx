    import React from 'react';
    import { BrowserRouter } from 'react-router-dom';
    import { render, screen } from '@testing-library/react';
    import Navbar from '../components/Navbar';

    describe('Navbar', () => {
    it('renders navigation links', () => {
        render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        );

        const homeLink = screen.getByText('Home');
        const cartLink = screen.getByText('Cart');

        expect(homeLink).toBeInTheDocument();
        expect(cartLink).toBeInTheDocument();
    });
    });
