
const PATH = {
  HOME: '/',
  PRODUCT: {
    ALL: '/products',
    VIEW: '/products/:productId',
    GO_TO: (productId) => `/products/${productId}`,
  },
  SHOPPING_LIST: {
    ALL: '/shopping-lists',
    VIEW: '/shopping-lists/:shopListId',
    GO_TO: (shopListId) => `/shopping-lists/${shopListId}`,
  },
};

export default PATH;
