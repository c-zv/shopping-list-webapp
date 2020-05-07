import axios from 'axios';

export const generateActionsForApiRequest = (actionName) => ({
  REQUEST: `${actionName}_REQUEST`,
  REQUEST_SUCCESS: `${actionName}_REQUEST_SUCCESS`,
  REQUEST_FAIL: `${actionName}_REQUEST_FAIL`,
});


const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});


export const apiShopLists = {
  getAll: () => (api.get('/shopping_lists')),
  getOne: (id) => (api.get(`/shopping_lists/${id}`)),
  create: (shopList) => (api.post('/shopping_lists', shopList)),
  update: (id, shopList) => (api.put(`/shopping_lists/${id}`, shopList)),
  delete: (id) => (api.delete(`shopping_lists/${id}`)),
};

export const apiCategories = {
  getAll: () => (api.get('/categories')),
};
