import { ReactElement } from 'react'

import Grid from '../styles/Grid'
import ProductCard from './ProductCard'

const ProductList = ({ products }): ReactElement => {
  return (
    <Grid>
      {products
        .slice(0, 12)
        .map(({ id, assets, description, name, variants }) => {
          return (
            <ProductCard
              key={id}
              assets={assets}
              description={description}
              name={name}
              variants={variants}
            />
          )
        })}
    </Grid>
  )
}

export default ProductList
