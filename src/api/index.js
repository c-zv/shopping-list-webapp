import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL_BASE,
});


const shopLists = {
  getAll: () => (api.get('/shopping_lists')),
  getOne: (id) => (api.get(`/shopping_lists/${id}`)),
  create: (shopList) => (api.post('/shopping_lists', shopList)),
  update: (id, shopList) => (api.put(`/shopping_lists/${id}`, shopList)),
  delete: (id) => (api.delete(`shopping_lists/${id}`)),
  addItem: (shopListId, storeProductId, quantity) => (
    api.put(`shopping_lists/${shopListId}/add_item`, { store_product_id: storeProductId, qty_to_buy: quantity })
  ),
};

const shopListItems = {
  create: (shopListId, item) => (api.post(`/shopping_lists/${shopListId}/items`, item)),
  update: (shopListId, itemId, item) => (api.put(`/shopping_lists/${shopListId}/items/${itemId}`, item)),
  delete: (shopListId, itemId) => (api.delete(`/shopping_lists/${shopListId}/items/${itemId}`)),
};

const categories = {
  getAll: () => (api.get('/categories')),
  getOne: (id) => (api.get(`/categories/${id}`)),
};

const products = {
  getAll: () => (api.get('/store_products')),
  getOne: (id) => (api.get(`/store_products/${id}`)),
};

const stores = {
  getAll: () => (api.get('/stores')),
};

export default {
  shopLists, shopListItems, categories, products, stores,
};
