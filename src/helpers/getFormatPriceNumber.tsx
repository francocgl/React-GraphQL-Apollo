const getFormatPriceNumber = (price: number): string => {
  return price.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

export default getFormatPriceNumber
