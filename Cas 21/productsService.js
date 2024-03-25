const getProductsByCategory = (products, category) => products.filter((product) => {product.category === category})
 

const getSumOfPrices = (sum) => 
sum.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)


const getAveragePrice = (average) => 