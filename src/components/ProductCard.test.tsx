import { render, fireEvent, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import MOCK_PRODUCTS, { MOCK_DESCRIPTION_1 } from '../const/mocks'
import ProductCard from './ProductCard'

const mockMutation = jest.fn().mockResolvedValue({
  data: {
    addItemToOrder: {
      id: '1',
      subTotal: 516780,
      total: 516780,
      __typename: 'Order',
    },
  },
})

describe('<ProductCard />', () => {
  it('should render the product card information correctly', () => {
    const { getByText } = render(
      <MockedProvider>
        <ProductCard {...MOCK_PRODUCTS[0]} />
      </MockedProvider>
    )

    expect(getByText('Tablet')).toBeInTheDocument()
    expect(getByText(MOCK_DESCRIPTION_1)).toBeInTheDocument()
    expect(getByText('$1,000')).toBeInTheDocument()
    expect(getByText('Buy')).toBeInTheDocument()
  })

  it('should render the product card image', () => {
    const { getByRole } = render(
      <MockedProvider>
        <ProductCard {...MOCK_PRODUCTS[0]} />
      </MockedProvider>
    )

    expect(getByRole('img')).toHaveAttribute(
      'src',
      'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg'
    )
  })

  it.skip('calls addItemToOrderMutation when Buy button is clicked', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductCard {...MOCK_PRODUCTS[0]} />
      </MockedProvider>
    )

    const buyButton = getByText('Buy')
    fireEvent.click(buyButton)

    await waitFor(() => {
      expect(mockMutation).toHaveBeenCalledTimes(1)
      expect(mockMutation).toHaveBeenCalledWith({
        variables: {
          productVariantId: '1',
          quantity: 1,
        },
      })
    })
  })

  it('should disable the Buy button while loading', () => {
    const { getByText } = render(
      <MockedProvider>
        <ProductCard {...MOCK_PRODUCTS[0]} />
      </MockedProvider>
    )

    const buyButton = getByText('Buy')
    fireEvent.click(buyButton)

    expect(buyButton).toBeDisabled()
  })
})
