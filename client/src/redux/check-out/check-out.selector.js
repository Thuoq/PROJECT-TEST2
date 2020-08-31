import {createSelector} from 'reselect';

const selectCheckOut = state => state.checkout;


export const selectSuccess = createSelector(
    [selectCheckOut],
    checkout => checkout.success
)

export const selectIsFetchingCheckOut = createSelector(
    [selectCheckOut],
    checkOut => checkOut.isFetching
)