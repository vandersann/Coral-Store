    // src/pages/ProductPage.tsx

    import React, { useState, useEffect } from 'react';
    import styled from 'styled-components';
    import { Product } from '../types';
    import { getAllProducts, updateProduct, deleteProduct } from '../api/products';
    import CategoryFilter from '../components/CategoryFilter';
    import ProductCard from '../components/ProductCard';
    import SearchBar from '../components/SearchBar';

    const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    `;

    const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    `;

    const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;

    const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    `;

    const ProductPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        } catch (error) {
        console.error('Error fetching products:', error);
        }
    };

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
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

    const filteredProducts = products.filter((product: Product) => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesSearch =
        !searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Container>
        <Title>Produtos</Title>
        <Filters>
            <CategoryFilter
            categories={['Eletrônicos', 'Roupas', 'Acessórios']}
            onSelectCategory={handleSelectCategory}
            />
            <SearchBar onSearch={handleSearch} />
        </Filters>
        <ProductGrid>
            {filteredProducts.map((product: Product) => (
            <ProductCard
                key={product.id}
                product={product}
                onUpdate={(updatedProduct: Product) => handleUpdateProduct(product.id, updatedProduct)} // Definindo o tipo Product
    onDelete={() => handleDeleteProduct(product.id)}
            />
            ))}
        </ProductGrid>
        </Container>
    );
    };

    export default ProductPage;
