export const getDiscountedPrice = (originalPrice, discountedPrice) => {
  const discount = originalPrice - discountedPrice;

  const discountedPercentage = Math.floor((discount / originalPrice) * 100);
  return discountedPercentage;
};
