export const storeQueryUser = (previousQuery, nextQuery) => {
  if (!nextQuery) return previousQuery;
  if (!nextQuery.nameEN) return previousQuery;
  return nextQuery.nameEN;
};
export function handleConvertDataBestSale(arr) {
  let mark = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    mark._id = arr[i]._id;
    mark.quantity = arr[i].quantity;
    mark = { ...arr[i].cart[0] };
    result.push(mark);
  }
  return result;
}
