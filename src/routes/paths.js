
const PATH = {
  HOME: '/',
  PRODUCT: {
    ALL: '/products',
    VIEW: '/products/:productId',
    GO_TO: (productId) => `/products/${productId}`,
  },
  SHOPPING_LIST: {
    ALL: '/shopping-lists',
  },
  SETTINGS: '/settings',
};

export default PATH;
