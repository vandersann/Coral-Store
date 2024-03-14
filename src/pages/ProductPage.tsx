import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Product } from '../types';
import { getAllProducts, updateProduct, deleteProduct } from '../api/products';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const ProductPage: React.FC<{}> = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []); // Empty dependency array to run once on mount

    const loadProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSelectCategory = (category: string | null) => {
        setSelectedCategory(category);
    };

    const handleUpdateProduct = async (id: number, updatedProduct: Product) => {
        try {
            const updated = await updateProduct(id, updatedProduct);
            const updatedProducts = products.map(product => (product.id === id ? updated : product));
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteProduct = async (id: number) => {
        try {
            await deleteProduct(id);
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            <CategoryFilter
                onSelectCategory={handleSelectCategory} categories={[]}            />
            <SearchBar onSearch={handleSearch} />
            <Container>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onUpdate={(updatedProduct: Product) => handleUpdateProduct(product.id, updatedProduct)}
                        onDelete={() => handleDeleteProduct(product.id)}
                    />
                ))}
            </Container>
        </>
    );
};

export default ProductPage;
