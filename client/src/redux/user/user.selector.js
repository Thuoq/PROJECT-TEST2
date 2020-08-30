import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectAddressName = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.address.map(el => el.name)
)



export const selectIsLoadingUser = createSelector(
  [selectUser],
  user => user.isLoading
)