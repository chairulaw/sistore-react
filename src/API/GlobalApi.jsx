import axios from "axios";

const storeBaseUrl = "https://fakestoreapi.com";

const GlobalApi = {
  // Get all products
  getAllProducts: () => axios.get(`${storeBaseUrl}/products`),

  getFiveProduct: () => axios.get(`${storeBaseUrl}/products?limit=5`),

  // Get products by search query
  getProductsBySearchQuery: (query) =>
    axios.get(`${storeBaseUrl}/products/search?q=${query}`),

  // Get product by categories
  getProductsByCategories: (categories) =>
    axios.get(`${storeBaseUrl}/products/category/${categories}`),

  // Get single product by ID
  getProductById: (id) => axios.get(`${storeBaseUrl}/products/${id}`),

  // Get products by category
  getProductsByCategory: (category) =>
    axios.get(`${storeBaseUrl}/products/category/${category}`),

  // Get all categories
  getCategories: () => axios.get(`${storeBaseUrl}/products/categories`),

  // Get limited products (pagination)
  getLimitedProducts: (limit) =>
    axios.get(`${storeBaseUrl}/products?limit=${limit}`),

  // Get popular products (highest rating)
  getPopularProducts: () =>
    axios.get(`${storeBaseUrl}/products?limit=100&sort=desc`),

  // Get latest products (newest by ID)
  getLatestProducts: () =>
    axios.get(`${storeBaseUrl}/products?limit=100&sort=desc`),

  // Get best-selling products (highest review count)
  getBestSellingProducts: () =>
    axios.get(`${storeBaseUrl}/products?limit=100&sort=desc`)
};

export default GlobalApi;
