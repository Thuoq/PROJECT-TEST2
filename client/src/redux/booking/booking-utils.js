export function handleData(arr) {
  const fixedData = [];
  const temp = {};
  for (let i = 0; i < arr.length; i++) {
    temp._id = arr[i]._id;
    temp.address = arr[i].address;
    temp.createAt = arr[i].createAt;
    temp.phoneNumber = arr[i].idUser.phoneNumber;
    temp.name = arr[i].idUser.name;
    temp.totalMoney = arr[i].totalMoney;
    for (let j = 0; j < arr[i].cart.length; j++) {
      temp.idProduct = arr[i].cart[j]._id.idProduct;
      temp.priceUSD = arr[i].cart[j]._id.priceUSD;
      temp.origin = arr[i].cart[j]._id.origin;
      temp.nameEN = arr[i].cart[j]._id.nameEN;
      temp.nameVN = arr[i].cart[j]._id.nameVN;
      temp.isCompleted = arr[i].cart[j].isCompleted;
      temp.weight = arr[i].cart[j]._id.weight;
      temp.totalWeight = arr[i].cart[j]._id.totalWeight;
      temp.quantity = arr[i].cart[j].quantity;
      temp.key = arr[i].cart[j].key;
      const mark = { ...temp };
      fixedData.push(mark);
    }
  }
  return fixedData;
}
