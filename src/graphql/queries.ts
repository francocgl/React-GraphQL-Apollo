import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      ...ItemsFields
    }
  }

  fragment ItemsFields on ProductList {
    items {
      id
      description
      name
      assets {
        ...AssetFields
      }
      variants {
        ...VariantFields
      }
    }
  }

  fragment AssetFields on Asset {
    id
    name
    source
  }

  fragment VariantFields on ProductVariant {
    id
    price
  }
`

export const GET_ORDER_SUBTOTAL = gql`
  query OrderTotalQuery {
    activeOrder {
      id
      total
    }
  }
`

export const GET_ORDER = gql`
  query GetOrderByIdQuery($orderId: ID!) {
    orderById(id: $orderId) {
      id
      total
    }
  }
`
