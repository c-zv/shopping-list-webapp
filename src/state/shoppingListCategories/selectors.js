import { createSelector } from 'reselect';

const categoriesAll = (state) => state.shoppingListCategories.all;

const getCategoryByIdCreator = createSelector(
  [
    categoriesAll,
    (_, categoryId) => categoryId,
  ],
  (categories, categoryId) => (
    categories ? categories.data.find((cat) => cat.id === categoryId) : undefined
  ),
);

const selectorsShopListCategories = {
  categoriesAll,
  getCategoryByIdCreator,
};


export default selectorsShopListCategories;
