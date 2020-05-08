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

const categories = {
  getAll: () => (api.get('/categories')),
  getOne: (id) => (api.get(`/categories/${id}`)),
};

export default { shopLists, categories };
