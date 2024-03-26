const getProductsByCategory = (products, category) =>
  products.filter((product) => {
    product.category === category;
  });

const getSumOfPrices = (products) =>
  products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

const getAveragePrice = (products) => {
  let sum = getSumOfPrices(products);
  return sum / products.length;
};

const getTheCheapestProduct = (products) => {
  let price = Number.POSITIVE_INFINITY;
  let cheapestProduct
  products.forEach((product) => {
    if (product.price < price) {
      price = product.price;
      cheapestProduct = product
    }
  });
  return cheapestProduct;
};

export default{
    getProductsByCategory,
    getSumOfPrices,
    getAveragePrice,
    getTheCheapestProduct
}