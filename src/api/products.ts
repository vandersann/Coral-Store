
    import axios from 'axios';
    import { Product } from '../types';

    const API_URL = 'https://fakeapi.platzi.com/api/v1/products';

    export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
    };

    export const updateProduct = async (productId: number, updatedProductData: Partial<Product>): Promise<Product> => {
    try {
        const response = await axios.put<Product>(`${API_URL}/${productId}`, updatedProductData);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
    };

    export const deleteProduct = async (productId: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${productId}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
    };
