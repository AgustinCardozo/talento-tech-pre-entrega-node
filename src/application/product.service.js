import { StoreAdapter } from "../infraestructure/store.adapter.js"

export const ProductService = {
    getAll: async () => {
        return StoreAdapter.getAllProducts();
    },
    getById: async (id) => {
        if (!id) {
            throw new Error('Product ID is required');
        }
        return StoreAdapter.getProductById(id);
    },
    create: async (title, price, category) => {
        if (!title || !price || !category) {
            throw new Error('Title, price, and category are required');
        }

        const newProduct = {
            title,
            price,
            category,
            description: "A new product",
            image: "https://example.com/image.png"
        };

        return StoreAdapter.createProduct(newProduct);
    },
    delete: async (id) => {
        if (!id) {
            throw new Error('Product ID is required');
        }
        return StoreAdapter.deleteProduct(id);
    },
    update: async (id, productData) => {
        if (!id) {
            throw new Error('Product ID is required');
        }
        if (!productData) {
            throw new Error('Product data is required');
        }
        return StoreAdapter.updateProduct(id, productData);
    }
}