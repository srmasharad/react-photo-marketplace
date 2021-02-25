import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectPhotoCollections = createSelector(
    [selectShop],
    collection => collection.collections
)