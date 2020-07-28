import { createSelector } from 'reselect';

const storesAllData = (state) => state.stores.all.data;

const getStoreByIdFn = () => createSelector(
  [
    storesAllData,
    (_, storeId) => storeId,
  ],
  (stores, storeId) => (
    stores ? stores.find((store) => store.id === storeId) : undefined
  ),
);

const selectorsStores = {
  storesAllData,
  getStoreByIdFn,
};


export default selectorsStores;
