import axios from "axios";

const storeBaseUrl = "https://fakestoreapi.com";

const GlobalApi = {
  // Get all products
  getAllProducts: () => {
    return axios.get(`${storeBaseUrl}/products`);
  },
  getFiveProduct: () => {
    return axios.get(`${storeBaseUrl}/products?limit=5`);
  },

  // Get products by search query
  getProductsBySearchQuery: (query) => {
    return axios.get(`${storeBaseUrl}/products/search?q=${query}`);
  },

  // Get product by categories
  getProductsByCategories: (categories) => {
    return axios.get(`${storeBaseUrl}/products/category/${categories}`);
  },

  // Get single product by ID
  getProductById: (id) => {
    return axios.get(`${storeBaseUrl}/products/${id}`);
  },

  // Get products by category
  getProductsByCategory: (category) => {
    return axios.get(`${storeBaseUrl}/products/category/${category}`);
  },

  // Get all categories
  getCategories: () => {
    return axios.get(`${storeBaseUrl}/products/categories`);
  },

  // Get limited products (pagination)
  getLimitedProducts: (limit) => {
    return axios.get(`${storeBaseUrl}/products?limit=${limit}`);
  },
};

export default GlobalApi;
