import { useState, ReactElement } from 'react'
import { useMutation } from '@apollo/client'

import { ADD_ITEM_TO_ORDER } from '../graphql/mutations'
import { getFormatPriceNumber } from '../helpers'

import {
  Card,
  CardBody,
  CardButton,
  CardDescription,
  CardHeader,
  CardImage,
  CardName,
  CardPrice,
} from '../styles/Card'

interface ProductCardProps {
  assets: any
  description: string
  name: string
  variants: any
}

const ProductCard = ({
  assets,
  description,
  name,
  variants,
}: ProductCardProps): ReactElement => {
  const [addItemToOrderMutation] = useMutation(ADD_ITEM_TO_ORDER)
  const [isLoading, setIsLoading] = useState(false)
  const price = variants[0].price
  const productVariantId = variants[0].id

  const priceProduct = `$${getFormatPriceNumber(price)}`

  const handleBuyClick = async (id) => {
    setIsLoading(true)
    await addItemToOrderMutation({
      variables: {
        productVariantId: id,
        quantity: 1,
      },
    })
      .then((response) => {
        setIsLoading(false)
        console.log('ADD_ITEM_TO_ORDER response: ', response)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }

  return (
    <Card>
      <CardHeader>
        <CardImage src={assets[0].source} alt={assets.name} />
      </CardHeader>
      <CardBody>
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{priceProduct}</CardPrice>
        <CardButton
          disabled={isLoading}
          onClick={() => handleBuyClick(productVariantId)}
        >
          Buy
        </CardButton>
      </CardBody>
    </Card>
  )
}

export default ProductCard
