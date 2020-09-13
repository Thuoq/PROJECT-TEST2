import { createSelector } from 'reselect';

const selectBooking = (state) => state.booking;

export const selectHistoryBooking = createSelector(
  [selectBooking],
  (booking) => booking.historyBook
);

export const selectIsLoadingBOOKING = createSelector(
  [selectBooking],
  (booking) => booking.isLoading
);
