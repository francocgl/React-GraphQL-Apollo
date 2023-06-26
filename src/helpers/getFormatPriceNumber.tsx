const getFormatPriceNumber = (price: number) => {
  return price.toLocaleString("en-US", { maximumFractionDigits: 2 })
}

export default getFormatPriceNumber
