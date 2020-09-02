import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => (shop.collections ? shop.collections : []),
);

export const selectProductDetail = (idProductParams) => createSelector(
  [selectCollections],
  (collections) => {
    if(!collections) return null
    const collectionsExist = collections.find((el) => el.idProduct === idProductParams * 1);
    return collectionsExist ? collectionsExist : null
  } 
);

export const selectIsCollectionLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading,
);
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);

export const selectCurrentPage = createSelector(
  [selectShop],
  (shop) => shop.currentPage,
);

export const selectCurrentQuery = createSelector(
  [selectShop],
  (shop) => shop.currentQuery,
);
