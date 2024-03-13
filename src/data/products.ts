
    import axios from 'axios';
    import { Product } from '../types';

    const API_URL = 'https://fakeapi.platzi.com/api/v1/products';

    // Função para buscar todos os produtos
    export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
    };

    // Função para buscar um produto pelo ID
    export const getProductById = async (id: number): Promise<Product> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product');
    }
    };

    // Função para criar um novo produto
    export const createProduct = async (product: Product): Promise<Product> => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        throw new Error('Error creating product');
    }
    };

    // Função para atualizar um produto existente
    export const updateProduct = async (id: number, updatedProduct: Product): Promise<Product> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        throw new Error('Error updating product');
    }
    };

    // Função para deletar um produto
    export const deleteProduct = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting product');
    }
    };
