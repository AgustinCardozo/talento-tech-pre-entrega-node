const API_URL = "https://fakestoreapi.com";

export const StoreAdapter = {
    getAllProducts: async () => {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        return products;
    },
    getProductById: async (id) => {
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        const product = await response.json();
        return product;
    },
    createProduct: async (productData) => {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error('Failed to create product');
        }
        const newProduct = await response.json();
        return newProduct;
    },
    deleteProduct: async (id) => {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
        return { message: 'Product deleted successfully' };
    },
    updateProduct: async (id, productData) => {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
        const updatedProduct = await response.json();
        return updatedProduct;
    }
}
