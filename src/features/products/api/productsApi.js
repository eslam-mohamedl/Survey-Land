// دوال API للتعامل مع المنتجات
import api from "@/services/apiClient";

// GET all products
export const getProducts = (params) => api.get("/products", params);

// GET single product
export const getProductById = (id) => api.get(`/products/${id}`);

// CREATE new product
export const createProduct = (data) => api.post("/products", data);

// UPDATE product
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);

// DELETE product
export const deleteProduct = (id) => api.delete(`/products/${id}`); 