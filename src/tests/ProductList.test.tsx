    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import ProductList from '../components/ProductList';
    import axios from 'axios';
    import MockAdapter from 'axios-mock-adapter';

    const mockAxios = new MockAdapter(axios);

    const mockProducts = [
    {
        id: 1,
        title: 'Product 1',
        category: 'Category 1',
        price: 10,
        description: 'Description 1',
        image: 'https://example.com/product1.jpg',
    },
    {
        id: 2,
        title: 'Product 2',
        category: 'Category 2',
        price: 20,
        description: 'Description 2',
        image: 'https://example.com/product2.jpg',
    },
    ];

    describe('ProductList', () => {
    beforeEach(() => {
        mockAxios.onGet('https://fakeapi.platzi.com/products').reply(200, mockProducts);
    });

    it('renders product cards correctly', async () => {
        render(<ProductList />);

        const product1Title = await screen.findByText('Product 1');
        const product2Title = await screen.findByText('Product 2');

        expect(product1Title).toBeInTheDocument();
        expect(product2Title).toBeInTheDocument();
    });
    });
