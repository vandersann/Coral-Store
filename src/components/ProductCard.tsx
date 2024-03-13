// src/components/ProductCard.tsx

import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin: 10px 0;
`;

const Price = styled.p`
    font-size: 1rem;
    color: #777;
`;

interface ProductCardProps {
    product: Product;
    onUpdate: (updatedProduct: Product) => void; // Corrigido para usar Product como tipo
    onDelete: () => void;
    }

    const ProductCard: React.FC<ProductCardProps> = ({ product, onUpdate, onDelete }) => {
    const handleUpdate = () => {
        const updatedProduct: Product = { ...product, price: product.price + 10 }; // Exemplo de atualização
        onUpdate(updatedProduct);
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <Card>
        <Image src={product.image} alt={product.title} />
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        </Card>
    );
};

export default ProductCard;