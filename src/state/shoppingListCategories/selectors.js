import { createSelector } from 'reselect';

const categoriesAllData = (state) => state.shoppingListCategories.all.data;

const getCategoryByIdCreator = () => createSelector(
  [
    categoriesAllData,
    (_, categoryId) => categoryId,
  ],
  (categories, categoryId) => (
    categories ? categories.find((cat) => cat.id === categoryId) : undefined
  ),
);

const selectorsShopListCategories = {
  categoriesAllData,
  getCategoryByIdCreator,
};


export default selectorsShopListCategories;
