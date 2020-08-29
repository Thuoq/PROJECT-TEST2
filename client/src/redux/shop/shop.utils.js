export const storeQueryUser = (previousQuery,  nextQuery) => {
    if(!nextQuery) return previousQuery
    if(!nextQuery.nameEN) return previousQuery
    return nextQuery.nameEN
}