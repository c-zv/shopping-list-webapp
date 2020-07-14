import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});


const shopLists = {
  getAll: () => (api.get('/shopping_lists')),
  getOne: (id) => (api.get(`/shopping_lists/${id}`)),
  create: (shopList) => (api.post('/shopping_lists', shopList)),
  update: (id, shopList) => (api.put(`/shopping_lists/${id}`, shopList)),
  delete: (id) => (api.delete(`shopping_lists/${id}`)),
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

export default { shopLists, shopListItems, categories };
