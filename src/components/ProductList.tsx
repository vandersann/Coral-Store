    import React, { useState, useEffect } from 'react';
    import styled from 'styled-components';
    import axios from 'axios';
    import { Product } from '../types';
    import ProductCard from './ProductCard';

    const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    `;

    const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('https://fakeapi.platzi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        };

        fetchProducts();
    }, []);

    return (
        <Container>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </Container>
    );
    };

    export default ProductList;
